const csvToJson = require("../utils/csvToJson.js");
const {matchWonPerTeamPerYearLoops , matchesWonPerTeamPerYearMethods} = require("../server/2-match-won-per-team-year.js")
const writeJsonLoops = require("../utils/writeJsonLoops.js");
const writeJsonMethods = require("../utils/writeJsonMethods.js");


csvToJson("matches" , (match) => {
    const method = matchesWonPerTeamPerYearMethods(match);
    writeJsonMethods("matchesWonPerTeamPerYear" , method);


    const loops = matchWonPerTeamPerYearLoops(match);
    writeJsonLoops("matchesWonPerTeamPerYear", loops);
} )