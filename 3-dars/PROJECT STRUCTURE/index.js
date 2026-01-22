const fs = require("fs")

fs.mkdirSync("src")
fs.mkdirSync("src\\components")
fs.mkdirSync("src\\components\\nav")
fs.mkdirSync("src\\components\\nav\\NavBar")
fs.mkdirSync("src\\components\\nav\\NavBarMenu")
fs.mkdirSync("src\\components\\nav\\NavBarSearch")

fs.writeFileSync("src\\components\\nav\\NavBar\\index.js", '"use strict";')
fs.writeFileSync("src\\components\\nav\\NavBarMenu\\index.js", '"use strict";')
fs.writeFileSync("src\\components\\nav\\NavBarSearch\\index.js", '"use strict";')