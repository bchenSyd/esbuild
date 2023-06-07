require("esbuild").build({
  entryPoints: ["./index.js"],
  bundle: true,
  platform: "browser", //By default, esbuild's bundler is configured to generate code intended for the browser
  outfile: "build/bundle-browser.js",
  sourcemap: false,
  target: ["es2020", "chrome58", "firefox57"],
});
require("esbuild").build({
  entryPoints: ["./index.js"],
  bundle: true,
  platform: "node", //By default, esbuild's bundler is configured to generate code intended for the browser
  outfile: "build/bundle-node.js",
  sourcemap: false,
  // packages:'external' // marks all import paths that look like npm packages as external
});
