// Get folder structure algorithm...
    // for each parent folder create a path (route)
    /**
     * Folder is a module....
     * File is a page
     * For each module build a sidebar with name of pages
     * 
     */
// Build a datastructure for sidebar configuration

// Push the module into the vuepress config automatically

// Other things:
// todo: Extract metadata from module.md
// todo: Process-title of module conventions
// todo: Locales


// todo: Consider setting up state management for the title....

//create sidebar
const fs = require('fs');
const path = require('path');

/**
 * 
 * @param {*} path of the module to get info from
 */
function bdModule(path){
    // get directory
    const dirs = fs.readdirSync(path).filter((f) => {
        //ignore directory start with .
        if (f.charAt(0) === "." || f === "images") return false;
        return fs.existsSync(path + "/" + f) && fs.statSync(path + "/" + f).isDirectory();
    });
    //list to under the docs files
    const files = fs.readdirSync(path).filter((f) => {
        //README.md and index.md skip
        if (f === "README.md" || f === "index.md") return false;
        //ignore not .md and .html files
        if (!(f.endsWith(".md") || f.endsWith(".html"))) return false;
        return fs.existsSync(path + "/" + f) && fs.statSync(path + "/" + f).isFile();
    });
    
    //create sidebar array from dirs and files
    const sidebarArray = dirs.map((dir) => {
        return {
            [`/${dir}/`]: fs.readdirSync(path + "/" + dir).map((childDir) => {
                return childDir
            })
        }
    }).concat(files.map((file) => {
        return file;
    })).sort((a, b) => {
        let aName = typeof a === "string" ? a : a.title;
        let bName = typeof b === "string" ? b : b.title;
        return aName > bName ? 1 : -1;
    });

    sidebarArray['/'] = [];
    
    return sidebarArray;
}
// Build sidebar Groups
function bdSibarGp(path){
    // Base path
    // for each for each folder in docs
    // Pass
}

let test = bdModule('.docs/');
console.log(test);


// return { 
//     title: 'Group 1',   // Get name of this group from folder, or yaml file
//     path: '/foo/',      // Get name of path from folder, or yaml file
//     collapsable: false, // optional, defaults to true
//     sidebarDepth: 1,    // optional, defaults to 1
//     children: [
//         //
//       '/'
// ]};












// Example of configuration
module.exports = {
  themeConfig: {
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      '/baz/': 'auto', /* automatically generate single-page sidebars */

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}