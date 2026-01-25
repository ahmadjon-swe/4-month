const fs = require("fs")
const uuid = require("uuid")
function read_file(file_name) {
    return JSON.parse(fs.readFileSync(`./module/${file_name}`, "utf-8"))
}

function write_file(file_name, data){
    return fs.writeFileSync(`./module/${file_name}`, JSON.stringify(data))
}

function add_item(chunk, file_name){
    const item = JSON.parse(chunk)
    const data = read_file(file_name)
    data.push({id: uuid.v4(),
        ...item})
    write_file(file_name, data)
}

module.exports = {
    read_file,
    write_file,
    add_item
}