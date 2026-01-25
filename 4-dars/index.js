 const http =require("http")
 const fs =require("fs")
 const uuid=require("uuid")
 const {read_file, write_file, add_item}=require("./api/file-sytem")

 const app =http.createServer((req, res)=>{
    
    if(req.url === "/get_cars" && req.method==="GET"){
        const data = read_file("cars.json")

        res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify(data))
    }

    if(req.url === "/add_car" && req.method==="POST"){
        req.on('data', (chunk)=>{
            add_item(chunk, "cars.json")

            res.writeHead(201, {"content-type": "application/json"})
            res.end(JSON.stringify({
                message: "data added succesfully"
            }))
        })
    }
    
    if(req.url === "/get_animals" && req.method==="GET"){
        const data = read_file("animals.json")

        res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify(data))
    }

    if(req.url === "/add_animal" && req.method==="POST"){
        req.on('data', (chunk)=>{
            add_item(chunk, "animals.json")

            res.writeHead(201, {"content-type": "application/json"})
            res.end(JSON.stringify({
                message: "data added succesfully"
            }))
        })
    }
    
    if(req.url === "/get_fruits" && req.method==="GET"){
        const data = read_file("fruits.json")

        res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify(data))
    }

    if(req.url === "/add_fruit" && req.method==="POST"){
        req.on('data', (chunk)=>{
            add_item(chunk, "fruits.json")

            res.writeHead(201, {"content-type": "application/json"})
            res.end(JSON.stringify({
                message: "data added succesfully"
            }))
        })
    }
    
    if(req.url === "/get_smartphones" && req.method==="GET"){
        const data = read_file("smartphones.json")

        res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify(data))
    }

    if(req.url === "/add_smartphone" && req.method==="POST"){
        req.on('data', (chunk)=>{
            add_item(chunk, "smartphones.json")

            res.writeHead(201, {"content-type": "application/json"})
            res.end(JSON.stringify({
                message: "data added succesfully"
            }))
        })
    }
    
    if(req.url === "/get_students" && req.method==="GET"){
        const data = read_file("students.json")

        res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify(data))
    }

    if(req.url === "/add_student" && req.method==="POST"){
        req.on('data', (chunk)=>{
            add_item(chunk, "students.json")

            res.writeHead(201, {"content-type": "application/json"})
            res.end(JSON.stringify({
                message: "data added succesfully"
            }))
        })
    }

    
 })


 app.listen(3000, ()=>{
    console.log("running at: "+ 3000);
 })