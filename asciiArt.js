const { argv } = require('node:process')
var figlet = require("figlet")

figlet(argv[2], function (err,data) {
    if (err) {
        console.log("Error detected.")
        console.dir(err)
        return
    }
    console.log(data)
})

