const fs = require("fs")

const hello = fs.readFileSync("./hello.txt")
console.log(hello.toString());

fs.writeFileSync("./text.txt", "removes everything in the file and writes this text to the file")
console.log(fs.readFileSync("./text.txt", "utf-8"));