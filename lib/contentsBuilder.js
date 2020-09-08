/**
 * This module should make a tree out of recursively finding
 * certain files inside folders
 * based on the folder hierarchy a tree would be drawn
 */


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
        // console.log(element)
    }
})


export function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach( f => {
      let dirPath = path.join(dir, f);
      let isDirectory = fs.statSync(dirPath).isDirectory();
      isDirectory ? 
        walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
  };

  walkDir(dirPath, function(filePath) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    console.log(filePath, fileContents);
  });







