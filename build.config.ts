import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  declaration: true,
  entries: ["./src/cli", "./src/index"],
  failOnWarn: false,
});
