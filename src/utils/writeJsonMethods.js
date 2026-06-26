const fs = require("fs");



function writeJsonMethods(fileName , data){

    fs.writeFileSync(`./src/public/output/methods/${fileName}.json` , JSON.stringify(data, null , 2));

}

module.exports = writeJsonMethods;
