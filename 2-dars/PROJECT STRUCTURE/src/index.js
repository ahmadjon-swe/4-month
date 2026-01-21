"use strict";

const fs = require("fs");

function addTxt(path){
    fs.writeFileSync(`${path}/text.ts`, "file gitga ketishi uchun yozildi")
}

function mkdir(path, callback) {
    fs.mkdir(path, (err) => {
        console.log(err);
    })

    if(callback) callback(path)
}


mkdir("__int_tests__", addTxt)
mkdir("__mocks__", addTxt)
mkdir("__tests__", addTxt)
mkdir("coverage", addTxt)
mkdir("dist", addTxt)

mkdir("docks")
mkdir("docks/api", addTxt)

mkdir("scripts")
mkdir("scripts/deployment", addTxt)

mkdir("src")



fs.writeFileSync("src/.gitignore", "# .gitignore");
fs.writeFileSync("src/index.js", fs.readFileSync("./index.js"));
fs.writeFileSync("src/package.json", fs.readFileSync("./package.json"));

fs.rmSync("./index.js");
fs.rmSync("./package.json");
