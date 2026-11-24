import { defineConfig } from "rolldown";
import process from "node:process";

export default defineConfig({
  input: "./src/main.ts",
  output: {
    file: "main.js",
    sourcemap: "inline",
    format: "cjs",
    minify: process.env.NODE_ENV == "production",
  },
  external: ["obsidian"],
});
