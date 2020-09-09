const fs = require('fs');
let { writeFile } = require("fs");
const path = require('path');
const config = require("../../hardocs.config.js");
const {walkDir} = require("../utils/walk")
const { Node } = require ("./classNode")
const YAML = require ("yamljs")

const dirPath = path.join(__dirname, `${config.base}`);

const buildNode = function(yaml, filePath){
    let js = YAML.parse(yaml);
    let newNode = new Node(js, filePath);
    return newNode;
    
}
 
let contents = []

// util being used
walkDir(dirPath, function (filePath) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    if (filePath.match(/hardocs.yaml/)) {
        // Build the node
        // Evaluate where it is and where to put it
        let newNode = buildNode(fileContents, filePath);
        contents.push(newNode)
    }
});

// write the module in a file
module.exports.contents = contents
writeFile(`${dirPath}\\.vuepress\\contents.data.json`, `{"contents":${JSON.stringify(contents)}}` , "utf8", function (err) {
    if (err) return err;
})










