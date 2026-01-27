const http = require("http");
const uuid = require("uuid")
const { read_file, write_file} = require("../api/file_system.js");

// CRUD
const options = {"content-type": "application/json", "access-control-allow-origin": "*"}

const hospital =((req, res, reqID)=>{

    // get_all
    if(req.url==="/get_all_patients" && req.method==="GET"){
        const patients = read_file("patients.json").map(v=>{
            delete v.id
            return v
        })

        res.writeHead(200, options)
        res.end(JSON.stringify(patients))
    }

    // get_one
    if(req.url==="/get_one_patient/"+reqID && req.method==="GET"){
        const patient = read_file("patients.json").find(v=>v.id===reqID)
        
        if(!patient){
            res.writeHead(404, options)
            return res.end(JSON.stringify({
                message: "404 data not found"
            }))
        }
        delete patient.id
        res.writeHead(200, options)
        res.end(JSON.stringify(patient))
    }

    // add_patient
    if(req.url==="/add_patient" && req.method==="POST"){
        req.on("data", (chunk)=>{
            const input=JSON.parse(chunk)
            const data = read_file("patients.json");
            data.push({
                id: uuid.v4(),
                name: input.name,
                age: input.age,
                gender: input.gender,
                diagnosis: input.diagnosis
            });
            write_file("patients.json", data);

            res.writeHead(201, options)
            res.end(JSON.stringify({
                message: "added succesfully"
            }))
        })
    }

    // update_patient
    if(req.url==="/update_patient/"+reqID && req.method==="PUT"){
        req.on("data", (chunk)=>{
            const input = JSON.parse(chunk)
            const data = read_file("patients.json")

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
                    v.gender = input.gender? input.gender:v.gender
                    v.diagnosis = input.diagnosis? input.diagnosis:v.diagnosis
                }
            });

            write_file("patients.json", data)

            res.writeHead(201, options)
            res.end(JSON.stringify({
                message: "added succesfully"
            }))
        })
    }

    // delete_patient
    if (req.url===`/delete_patient/${reqID}` && req.method==="DELETE") {
        let data = read_file("patients.json")
        const idx=data.findIndex(v=>v.id===reqID)

        if(idx===-1){
            res.writeHead(404, options)
            return res.end(JSON.stringify({
                message: "404 Something is wrong"
            }))
        }

        data.splice(idx, 1)

        write_file("patients.json", data);

        res.writeHead(200, options)
        res.end(JSON.stringify({
            message: "removed succesfully"
        }))
    }
})  //THE END OF HOSPITAL

module.exports = hospital