import { join, resolve } from "node:path";

/**
 * @type {import('@rune-ts/server').RuneConfigType}
 */
export default {
  port: 5005,
  hostname: "localhost",
  mode: "render",
  sassOptions: {
    includePaths: [join(resolve(), "./src/app/style")],
    additionalData: `@import "base";`,
  },
  clientEntry: "./src/app/client/index.ts",
  serverEntry: "./src/app/server/index.ts",
  watchToIgnorePaths: ["**/.env.*", "*.json"],
};
