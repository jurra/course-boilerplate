const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, "../../site/docs");

import { Node } from "./classNode"
import YAML from "yamljs"

// TODO: this should be a utility not inside this model
export function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ?
            walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
};

const buildNode = function(yaml, filePath){
    let js = YAML.parse(yaml);
    let newNode = new Node(js, filePath);
    return newNode;
    
}
 
export let contents = []

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










