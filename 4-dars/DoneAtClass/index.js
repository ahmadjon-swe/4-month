"use strict";

const http = require("http")
const events = require("events")

class UserActivity extends events.EventEmitter {}
const userActivity = new UserActivity()

const onlineUsers = new Map()

function checkOffline() {
    const now = Date.now()
    for (const [userIP, lastActivity] of onlineUsers) {
        if((now-lastActivity)>5000){
            userActivity.emit("offlineUser", userIP)
            onlineUsers.delete(userIP)
            console.log(onlineUsers);
        }
    }
}

const app = http.createServer((req, res) => {
    const userIP = req.socket.remoteAddress
    
    if(req.url === "/connection" && req.method==="GET"){
        onlineUsers.set(userIP, Date.now())
        userActivity.emit("onlineUser", userIP)
        console.log(onlineUsers);
        res.end(`online user: ${userIP}`)
    }else{
        res.end("bunday endpoint yo'q")
    }


    userActivity.on("onlineUser", (userIP)=>{
        console.log("foydalanuvchi online: ", userIP);
    })

    userActivity.on("offlineUser", (userIP)=>{
        console.log("foydalanuvchi offline: ", userIP);
    }) 
})  

setInterval(checkOffline, 5000)

app.listen(3000, ()=>{
    console.log("server is running at:"+ 3000);
})