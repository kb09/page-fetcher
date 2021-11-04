
const request = require('request');
const fs = require('fs');

let URL = process.argv[2];
let localPath = process.argv[3];

request(URL, function(error, response, body) {
 
  fs.writeFile(localPath, body, function(error) {
    if (error) {
      console.log("Can't write to file");
      return;
    } else 
    console.log(`Downloaded and saved ${response} bytes to ${localPath}`);
  });
});