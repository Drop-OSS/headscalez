import { startHeadscale } from "./index";

async function main() {
  const args = process.argv.splice(2);
  await startHeadscale({ args, externalUrl: "http://localhost:8080" });
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
