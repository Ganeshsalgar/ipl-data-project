const csvToJson = require("../utils/csvToJson.js");
const writeJsonMethods = require("../utils/writeJsonMethods.js");
const writeJsonLoops = require("../utils/writeJsonLoops.js");
const {getmatchesperyear , getmatchesperyearWithLoops} = require("../server/1-mathces-per-year.js");



csvToJson("matches" , (match) => {
    const result = getmatchesperyear(match);
    const resultLoops = getmatchesperyearWithLoops(match);


    writeJsonMethods("1-matches-per-year" , result);
    

    writeJsonLoops("matches-per-year" , resultLoops)
})



