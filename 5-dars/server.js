const http = require("http");
const uuid = require("uuid")
const { read_file, write_file} = require("./api/file_system");
const hospital = require("./backend/hospital.js");
const liquor_store = require("./backend/liquor_store");
const restaurant = require("./backend/restaurant");

// CRUD
const options = {"content-type": "application/json", "access-control-allow-origin": "*"}

const app = http.createServer((req, res)=>{
    const reqID = req.url.split("/").pop()

    if(req.url.includes("patient")) hospital(req, res, reqID)
    if(req.url.includes("drink")) liquor_store(req, res, reqID)
    if(req.url.includes("dish")) restaurant(req, res, reqID)
    // get_all
    if(req.url==="/get_all_students" && req.method==="GET"){
        const students = read_file("students.json").map(v=>{
            delete v.id
            return v
        })

        res.writeHead(200, options)
        res.end(JSON.stringify(students))
    }

    // get_one
    if(req.url==="/get_one_student/"+reqID && req.method==="GET"){
        const student = read_file("students.json").find(v=>v.id===reqID)
        
        if(!student){
            res.writeHead(404, options)
            return res.end(JSON.stringify({
                message: "404 data not found"
            }))
        }
        delete student.id
        res.writeHead(200, options)
        res.end(JSON.stringify(student))
    }

    // add_student
    if(req.url==="/add_student" && req.method==="POST"){
        req.on("data", (chunk)=>{
            const input=JSON.parse(chunk)
            const data = read_file("students.json");
            data.push({
                id: uuid.v4(),
                name: input.name,
                age: input.age,
                major: input.major,
            });
            write_file("students.json", data);

            res.writeHead(201, options)
            res.end(JSON.stringify({
                message: "added succesfully"
            }))
        })
    }

    // update_student
    if(req.url==="/update_student/"+reqID && req.method==="PUT"){
        req.on("data", (chunk)=>{
            const input = JSON.parse(chunk)
            const data = read_file("students.json")

            if(!data.some(v=>v.id===reqID)){
                res.writeHead(404, options)
                return res.end(JSON.stringify({
                    message: "404 Something is wrong"
                }))
            }

            data.forEach((v) => {
                if(v.id===reqID){
                    v.name = input.name? input.name:v.name
                    v.age = input.age? input.age:v.age
                    v.major = input.major? input.major:v.major
                }
            });

            write_file("students.json", data)

            res.writeHead(201, options)
            res.end(JSON.stringify({
                message: "added succesfully"
            }))
        })
    }

    // delete_student
    if (req.url===`/delete_student/${reqID}` && req.method==="DELETE") {
        let data = read_file("students.json")
        const idx=data.findIndex(v=>v.id===reqID)

        if(idx===-1){
            res.writeHead(404, options)
            return res.end(JSON.stringify({
                message: "404 Something is wrong"
            }))
        }

        data.splice(idx, 1)

        write_file("students.json", data);

        res.writeHead(200, options)
        res.end(JSON.stringify({
            message: "removed succesfully"
        }))
    }
}) //THE END OF APP

app.listen(3000, ()=>{
    console.log("running at: "+3000);
})
