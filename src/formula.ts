export const headscaleFormula = {
  name: "headscale",
  version: "0.25.1",
  execArgs: "serve -c {config}",
  platforms: [
    {
      name: "linux",
      arch: "x64",
      source:
        "https://github.com/juanfont/headscale/releases/download/v0.25.1/headscale_0.25.1_linux_amd64",
    },
    {
      name: "linux",
      arch: "arm64",
      source:
        "https://github.com/juanfont/headscale/releases/download/v0.25.1/headscale_0.25.1_linux_arm64",
    },
    {
      name: "darwin",
      arch: "arm64",
      source:
        "https://github.com/juanfont/headscale/releases/download/v0.25.1/headscale_0.25.1_darwin_arm64",
    },
  ],
};
