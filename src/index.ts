import path from "path";
import os from "os";
import fs, { ReadStream } from "fs";
import fsExtra from "fs-extra";
import { ofetch } from "ofetch";
import { execa, ResultPromise } from "execa";
import { onShutdown } from "node-graceful-shutdown";
import { headscaleFormula as formula } from "./formula";
import createConfig from "./config";

export interface HeadscaleOptions {
  platform?: string;
  arch?: string;
  dir?: string;
  port?: string | number;
  args?: string[];
  externalUrl: string;
}

export type HeadscaleOptionsResolved = Required<HeadscaleOptions>;

export interface HeadscaleService {
  service: ResultPromise<{}>;
  close: () => Promise<boolean>;
}

export async function startHeadscale(
  _opts: HeadscaleOptions
): Promise<HeadscaleService> {
  // Apply defaults
  const opts: HeadscaleOptionsResolved = {
    port: process.env.HEADSCALE_PORT || process.env.PORT || 8080,
    platform: process.env.HEADSCALE_PLATFORM || process.platform,
    arch: process.env.HEADSCALE_ARCH || process.arch,
    dir: process.env.HEADSCALE_DIR || path.resolve(os.tmpdir(), "headscalez"),
    args: [],
    ..._opts,
  };

  // Find platform
  const platform = formula.platforms.find(
    (p) => p.name === opts.platform && p.arch == opts.arch
  );
  if (!platform) {
    throw new Error(
      `Platform '${opts.platform}/${opts.arch}' is not available for '${formula.name}'`
    );
  }

  // Resolve paths
  const dataDir = path.resolve(opts.dir);
  const binaryPath = path.resolve(opts.dir, "headscale");

  // config consts
  const databasePath = path.resolve(opts.dir, "headscale.sqlite");
  const cachePath = path.resolve(opts.dir, "cache");
  const noisePrivateKey = path.resolve(opts.dir, "noise_private.key");
  const derpPrivateKey = path.resolve(opts.dir, "derp_private.key");

  const socketPath = path.resolve(opts.dir, "headscale.socket");

  // log/config
  const configPath = path.resolve(opts.dir, "config.yaml");
  const logPath = path.resolve(opts.dir, "headscale.log");

  // Ensure data dir exists
  await fsExtra.mkdirp(dataDir);

  // Ensure package is installed
  if (!fsExtra.existsSync(binaryPath)) {
    const response = await ofetch<ReadableStream>(platform.source, {
      responseType: "stream" as any,
    });
    const destination = fs.createWriteStream(binaryPath);

    await response.pipeTo(
      new WritableStream({
        start(controller) {},
        write(chunk, controller) {
          destination.write(chunk);
        },
        close() {
          destination.end();
        },
        abort(reason) {
          throw reason; // fuck it lol
        },
      })
    );

    await execa("chmod", ["+x", binaryPath]);
  }

  const config = createConfig(opts, {
    databasePath,
    cachePath,
    noisePrivateKey,
    derpPrivateKey,
    socketPath,
  });
  fs.writeFileSync(configPath, config);

  // Port and args
  const execArgs = formula.execArgs.replace("{config}", configPath).split(" ");
  if (Array.isArray(opts.args)) {
    execArgs.push(...opts.args);
  }

  // Start app
  const logsFile = await fsExtra.open(logPath, "w+");
  const stdout = logsFile;
  const stderr = logsFile;
  const service = execa(binaryPath, execArgs, {
    stdout,
    stderr,
  });

  const close = () => Promise.resolve(service.kill());

  onShutdown(async () => {
    close();
  });

  return {
    service,
    close,
  };
}
