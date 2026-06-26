const csvToJson = require("../utils/csvToJson");

// Number of matches won per team per year in IPL.

function matchesWonPerTeamPerYearMethods(matches){
    
    return matches.reduce((result , match) => {
        const season = match.season;
        const winTeam = match.winner;

        if (!winTeam) return result;
        
        if(!result[season]){
            result[season] = {};
        }
        
        if(!result[season][winTeam]){
            result[season][winTeam] = 0;
        }

        result[season][winTeam]++;
        return result;

    } , {});


}


function matchWonPerTeamPerYearLoops(matches){

    const result = {};

    for(let i = 0; i < matches.length; i++){    

        const season = matches[i].season;
        const winnerTeam = matches[i].winner;

        if(!winnerTeam) continue;

        if(!result[season]){
            result[season] = {};
        }

        if(!result[season][winnerTeam]){
            result[season][winnerTeam] = 0;
        }

        result[season][winnerTeam]++;
    }

    return result;
}

module.exports = {matchesWonPerTeamPerYearMethods , matchWonPerTeamPerYearLoops};

// csvToJson("matches" , (match) =>{

//     const methods = matchesWonPerTeamPerYearMethods(match);
//     console.log("methods :: ======================");
//     console.log(methods);
    

//     const loops = matchWonPerTeamPerYearLoops(match);
//     console.log("Loops :: ======================");
//     console.log(loops);
    
// })