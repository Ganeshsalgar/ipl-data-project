const fs = require("fs");
const csv = require("csv-parser");

function csvToJson(fileName, callback) {
  const result = [];

  fs.createReadStream(`./src/data/${fileName}.csv`)
    .pipe(csv())
    .on("data", (data) => result.push(data))
    .on("end", () => callback(result))
    .on("error", (error) => console.log(error));
}

module.exports = csvToJson;