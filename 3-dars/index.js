const fs = require("fs");
const path = require("path");
const os = require("os")
// // 1-topshiriq ///////////////////////////////////////////////////////////////////////////

// const newPath = path.join("\home", "user", "documents");
// const notePath = newPath.concat("\\notes.txt"); // console'ga chiqarish uchun

// fs.writeFileSync(path.normalize(notePath), "txt");
// console.log(notePath);

// // 2-topshiriq ///////////////////////////////////////////////////////////////////////////

// const files = ["document.pdf", "photo.jpeg", "archive.zip"];

// function identifyFormat(...files) {
//     const p = require("path");
//     return files.map((v) => p.extname(v));
// }

// console.log(identifyFormat(...files));

// 3-topshiriq ///////////////////////////////////////////////////////////////////////////

// let thePath = "D:\\movies\\horror\\movie.mkv";

// const obj = path.parse(thePath);
// obj.dir = "E:" + obj.dir.slice(2);
// thePath = path.format(obj);

// console.log(thePath);

// 4-topshiriq ///////////////////////////////////////////////////////////////////////////

// console.log("foydalanuvchi:",os.userInfo().username);
// console.log("Home katalogi:", os.homedir());

// 5-topshiriq ///////////////////////////////////////////////////////////////////////////

// const net = Object.entries(os.networkInterfaces())

// console.log("interfeys:", net[0][0], "\nIP:", net[0][1][1].address, "\nMAC:", net[0][1][1].mac);

// Additional ///////////////////////////////////////////////////////////////////////////

function showMem() {
    const os = require("os")
    
    const avl = (os.freemem()/1024/1024)
    const total = os.totalmem()/1024/1024
    return{
        freeSysMem: avl,
        memoryInUse: total-avl,
        totalMem: total
    }
}

console.log(showMem())