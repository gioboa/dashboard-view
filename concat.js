const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const filesES5 = [
    "./dist/external/runtime-es5.js",
    "./dist/external/polyfills-es5.js",
    "./dist/external/scripts.js",
    "./dist/external/main-es5.js",
    "./dist/external/styles-es5.js"
  ];
  const filesES2015 = [
    "./dist/external/runtime-es2015.js",
    "./dist/external/polyfills-es2015.js",
    "./dist/external/scripts.js",
    "./dist/external/main-es2015.js",
    "./dist/external/styles-es2015.js"
  ];
  await fs.ensureDir("elements");
  await concat(filesES5, "elements/dashboard-view-es5.js");
  await concat(filesES2015, "elements/dashboard-view-es2015.js");
})();
