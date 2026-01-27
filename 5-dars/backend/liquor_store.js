const http = require("http");
const uuid = require("uuid")
const { read_file, write_file} = require("../api/file_system");

// CRUD
const options = {"content-type": "application/json", "access-control-allow-origin": "*"}

const liquor_store =((req, res, reqID)=>{

    // get_all
    if(req.url==="/get_all_drinks" && req.method==="GET"){
        const drinks = read_file("drinks.json").map(v=>{
            delete v.id
            return v
        })

        res.writeHead(200, options)
        res.end(JSON.stringify(drinks))
    }

    // get_one
    if(req.url==="/get_one_drink/"+reqID && req.method==="GET"){
        const drink = read_file("drinks.json").find(v=>v.id===reqID)
        
        if(!drink){
            res.writeHead(404, options)
            return res.end(JSON.stringify({
                message: "404 data not found"
            }))
        }
        delete drink.id
        res.writeHead(200, options)
        res.end(JSON.stringify(drink))
    }

    // add_drink
    if(req.url==="/add_drink" && req.method==="POST"){
        req.on("data", (chunk)=>{
            const input=JSON.parse(chunk)
            const data = read_file("drinks.json");
            data.push({
                id: uuid.v4(),
                type: input.type,
                year: input.year,
                volume: input.volume,
                brend: input.brend,
                price: input.price,
            });
            write_file("drinks.json", data);

            res.writeHead(201, options)
            res.end(JSON.stringify({
                message: "added succesfully"
            }))
        })
    }

    // update_drink
    if(req.url==="/update_drink/"+reqID && req.method==="PUT"){
        req.on("data", (chunk)=>{
            const input = JSON.parse(chunk)
            const data = read_file("drinks.json")

            if(!data.some(v=>v.id===reqID)){
                res.writeHead(404, options)
                return res.end(JSON.stringify({
                    message: "404 Something is wrong"
                }))
            }

            data.forEach((v) => {
                if(v.id===reqID){
                    v.type = input.type? input.type:v.type
                    v.year = input.year? input.year:v.year
                    v.volume = input.volume? input.volume:v.volume
                    v.brend = input.brend? input.brend:v.brend
                    v.price = input.price? input.price:v.price
                }
            });

            write_file("drinks.json", data)

            res.writeHead(201, options)
            res.end(JSON.stringify({
                message: "added succesfully"
            }))
        })
    }

    // delete_drink
    if (req.url===`/delete_drink/${reqID}` && req.method==="DELETE") {
        let data = read_file("drinks.json")
        const idx=data.findIndex(v=>v.id===reqID)

        if(idx===-1){
            res.writeHead(404, options)
            return res.end(JSON.stringify({
                message: "404 Something is wrong"
            }))
        }

        data.splice(idx, 1)

        write_file("drinks.json", data);

        res.writeHead(200, options)
        res.end(JSON.stringify({
            message: "removed succesfully"
        }))
    }
})  //THE END OF LIQUOR_STORE

module.exports = liquor_store