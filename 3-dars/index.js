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


// let previousTimes = os.cpus().map(cpu => cpu.times)

// setInterval(()=>{
//     const cpus = os.cpus()
//     cpus.forEach((cpu, index)=>{
//         const prevTimes = previousTimes[index]
//         const currTimes = cpu.times

//         const userDiff = currTimes.user - prevTimes.user
//         const sysDiff = currTimes.sys - prevTimes.sys
//         const idleDiff = currTimes.idle - prevTimes.idle
//         const totalDiff = userDiff + sysDiff + idleDiff

//         const usage = ((totalDiff - idleDiff)/totalDiff)*100
//         console.log(`cpu ${index}: ${usage.toFixed(2)}% ishlatilmoqda`);
//     })
    
//     // Oldingi holatni yangilash
//     previousTimes = cpus.map(cpu => cpu.times)
// }, 1000)

// function showMem() {
//     const os = require("os")
    
//     const avl = (os.freemem()/1024/1024)
//     const total = os.totalmem()/1024/1024
//     return{
//         freeSysMem: avl,
//         memoryInUse: total-avl,
//         totalMem: total
//     }
// }

// setInterval(()=>console.log(showMem()), 1000);