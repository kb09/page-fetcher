
const request = require('request');
const fs = require('fs');

let URL = process.argv[2];
let localPath = process.argv[3];

request(URL, function(error, response, body) {
  if (error){
    return error;
  }
 fs.writeFile(localPath, body, function(error) {
    if (error) {
      return ("Can't write to file");
    }
  
    console.log(`Downloaded and saved ${response['headers']['content-length']} bytes to ${localPath}`);
  })
})