import { build, stop } from "https://deno.land/x/esbuild@v0.12.1/mod.js";
// import httpFetch from "https://deno.land/x/esbuild_plugin_http_fetch/index.js";

await build({
  bundle: true,
  entryPoints: ["index.js"],
  outfile: "bundle.js",
  format: "esm",
  target: ["chrome100"],
  external: ["react", "hyphenate-style-name", "normalize-css-color"],
  external: ["react"],
  //   plugins: [httpFetch],
});

stop();
