const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const filesES5 = [
    './dist/dashboard-view/runtime-es5.js',
    './dist/dashboard-view/polyfills-es5.js',
    './dist/dashboard-view/scripts.js',
    './dist/dashboard-view/main-es5.js',
    './dist/dashboard-view/styles-es5.js'
  ];
  const filesES2015 = [
    './dist/dashboard-view/runtime-es2015.js',
    './dist/dashboard-view/polyfills-es2015.js',
    './dist/dashboard-view/scripts.js',
    './dist/dashboard-view/main-es2015.js',
    './dist/dashboard-view/styles-es2015.js'
  ];
  await fs.ensureDir('elements');
  await concat(filesES5, 'elements/dashboard-view-es5.js');
  await concat(filesES2015, 'elements/dashboard-view-es2015.js');
})();
