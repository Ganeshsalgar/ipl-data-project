const fs = require("fs")

function writeJsonLoops(fileName , data){

    fs.writeFileSync(`./src/public/output/Loops/${fileName}.json` , JSON.stringify(data, null , 2));

}

module.exports = writeJsonLoops;


