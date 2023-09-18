const fs = require("fs");
const { join } = require("path");
const { types } = require("util");

/*
 * <----- FILE SYSTEM PROJECT ------>
 * File search Utility
 * Users should be able to specify search criteria such as filename, file type, size
 * options like case sensitivity, regular expressions 
TODO - ADD SUPPORT FOR FILE TYPE AND FILE SIZE AS SEARCH CRITERIA
 */

/**
 *
 * @param {string} initialPath - Root directory
 * @param {string | RegExp} filename - Name of file to be searched for
 * @param {{type?: string, size?: string}} options - Options for detailed search
 * @returns {string[]}
 */

function fileFinder(filename, initialPath, options) {
  const results = [];
  function finder(path) {
    const files = fs.readdirSync(path);
    for (let i = 0; i < files.length; i++) {
      const fpath = join(path, files[i]);
      const stat = fs.statSync(fpath);
      if (stat.isDirectory()) finder(fpath);
      if (stat.isFile()) {
        const match = types.isRegExp(filename)
          ? filename.test(files[i])
          : filename === files[i];
        if (match) results.push(fpath);
      }
    }
  }
  finder(initialPath);
  return results;
}

console.log(fileFinder(/\w+.js/, __dirname));
