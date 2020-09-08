const fs = require('fs');
const path = require('path');
import walkDir from "../lib/buildContents"
// Check that is documentation

const dirPath = path.join(__dirname, "../site/docs");  


it('Checks if it is a docs or not', () => {
    walkDir(dirPath, function(filePath) {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        console.log(filePath, fileContents);
      });
})

