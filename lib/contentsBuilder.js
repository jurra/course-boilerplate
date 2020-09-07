// Imports
const fs = require('fs');
const path = require('path');
const { readFileSync, readdirSync, readFile } = require("fs");

const dirPath = path.join(__dirname, "../site/docs");
// Convert from markdown to json

// Building up data tree

// Search for yaml file fitting certain namespace
const dirs = fs.readdirSync(dirPath).filter(element => {
    // recursively go through the folder and extract hardocs.yaml
    const results = [];
    if (element == "hardocs.yaml") {
            // exception more than one yaml, take only one...
            // Console log there are more than two config erase one
        // convert from yaml to json, and push the data object with its characteristics
        // Create new node
        // Check if there are parents
        console.log(element)
    }
})



export default  function(dir, done) {
    let results = []
    console.log("this function")
    
}


var walk = function (dir, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var pending = list.length;
        if (!pending) return done(null, results);
        list.forEach(function (file) {
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function (err, res) {
                        results = results.concat(res);
                        if (!--pending) done(null, results);
                    });
                } else {
                    results.push(file);
                    if (!--pending) done(null, results);
                }
            });
        });
    });
};

walk(dirPath, function(){console.log("Finished")})

