const csvToJson = require("../utils/csvToJson")
const writeJsonLoops = require("../utils/writeJsonLoops");
const writeJsonMethods = require("../utils/writeJsonMethods");
const {top10EconomicalBowlerLoops , top10EconomicalBowlerMethods} = require("../server/4-top-10-economocal-bowler")



csvToJson("matches" , (matches) => {
    csvToJson("deliveries" , (deliveries) => {
        const method = top10EconomicalBowlerLoops(deliveries ,matches);
        writeJsonMethods("top10bowler" , method);

        const loops = top10EconomicalBowlerMethods(deliveries , matches);
        writeJsonLoops("top10bowler" , loops);
    })
})



