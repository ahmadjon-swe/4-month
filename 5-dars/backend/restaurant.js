const http = require("http");
const uuid = require("uuid")
const { read_file, write_file} = require("../api/file_system");

// CRUD
const options = {"content-type": "application/json", "access-control-allow-origin": "*"}

const restaurant =((req, res, reqID)=>{

    // get_all
    if(req.url==="/get_all_dishes" && req.method==="GET"){
        const dishes = read_file("dishes.json").map(v=>{
            delete v.id
            return v
        })

        res.writeHead(200, options)
        res.end(JSON.stringify(dishes))
    }

    // get_one
    if(req.url==="/get_one_dish/"+reqID && req.method==="GET"){
        const dish = read_file("dishes.json").find(v=>v.id===reqID)
        
        if(!dish){
            res.writeHead(404, options)
            return res.end(JSON.stringify({
                message: "404 data not found"
            }))
        }
        delete dish.id
        res.writeHead(200, options)
        res.end(JSON.stringify(dish))
    }

    // add_dish
    if(req.url==="/add_dish" && req.method==="POST"){
        req.on("data", (chunk)=>{
            const input=JSON.parse(chunk)
            const data = read_file("dishes.json");
            data.push({
                id: uuid.v4(),
                name: input.name,
                type: input.type,
                category: input.category,
                calories: input.calories,
                is_vegeterian: input.is_vegeterian?input.is_vegeterian:false,
                price: input.price
            });
            write_file("dishes.json", data);

            res.writeHead(201, options)
            res.end(JSON.stringify({
                message: "added succesfully"
            }))
        })
    }

    // update_dish
    if(req.url==="/update_dish/"+reqID && req.method==="PUT"){
        req.on("data", (chunk)=>{
            const input = JSON.parse(chunk)
            const data = read_file("dishes.json")

            if(!data.some(v=>v.id===reqID)){
                res.writeHead(404, options)
                return res.end(JSON.stringify({
                    message: "404 Something is wrong"
                }))
            }

            data.forEach((v) => {
                if(v.id===reqID){
                    v.name = input.name? input.name:v.name
                    v.type = input.type? input.type:v.type
                    v.category = input.category? input.category:v.category
                    v.calories = input.calories? input.calories:v.calories
                    v.is_vegeterian = input.is_vegeterian? input.is_vegeterian:v.is_vegeterian
                    v.price = input.price? input.price:v.price
                }
            });

            write_file("dishes.json", data)

            res.writeHead(201, options)
            res.end(JSON.stringify({
                message: "added succesfully"
            }))
        })
    }

    // delete_dish
    if (req.url===`/delete_dish/${reqID}` && req.method==="DELETE") {
        let data = read_file("dishes.json")
        const idx=data.findIndex(v=>v.id===reqID)

        if(idx===-1){
            res.writeHead(404, options)
            return res.end(JSON.stringify({
                message: "404 Something is wrong"
            }))
        }

        data.splice(idx, 1)

        write_file("dishes.json", data);

        res.writeHead(200, options)
        res.end(JSON.stringify({
            message: "removed succesfully"
        }))
    }
})  //THE END OF RESTAURANT

module.exports = restaurant