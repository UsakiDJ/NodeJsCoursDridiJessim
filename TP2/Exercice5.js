const fs = require("fs")

fs.appendFile("TP2/file.txt", "Nouveau document",(err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });