const csvToJson = require("../utils/csvToJson");
const writeJsonLoops = require("../utils/writeJsonLoops");
const writeJsonMethods = require("../utils/writeJsonMethods");
const {extraRunPerTeam2016Loops , extraRunPerTeamIn2016Methods } = require("../server/3-extra-run-per-team-2016");


csvToJson("matches" , (match) => {
    csvToJson("deliveries" , (delivery) => {
        const method = extraRunPerTeamIn2016Methods(match , delivery);
        writeJsonMethods("problem-3" , method);

        const loops = extraRunPerTeam2016Loops(match , delivery);
        writeJsonLoops("problem-3" , loops);

    })
})