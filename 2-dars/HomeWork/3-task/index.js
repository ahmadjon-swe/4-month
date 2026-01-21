const fs = require("fs")
const random =  require("random-int").default
// yoki:
// const {default: random} =  require("random-int")

const arr = []

for(let i = 0; i <= 10; i++) {
    arr[i]=Buffer.from(random(100).toString())
}

fs.writeFileSync("./buffer.txt", arr.toString())

function stringParse(path) {
    // string yani matn sifatida:
    // console.log(typeof fs.readFileSync(path, "utf-8"));
    console.log(fs.readFileSync(path, "utf-8"));
}

stringParse("./buffer.txt")