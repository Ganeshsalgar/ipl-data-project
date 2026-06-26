// Extra runs conceded per team in the year 2016

const csvToJson = require("../utils/csvToJson.js");

function extraRunPerTeamIn2016Methods(matches ,deliveries){
 
    const matchIds = matches.reduce((acc, match) => {
        if (match.season === "2016") {
            acc[match.id] = true;
        }
        return acc;
    }, {});

    const result = deliveries.reduce((delivery , currDelivery) => {
        const deliveryId = currDelivery.match_id;
        const bowlerTeam = currDelivery.bowling_team;
        const extraRuns = currDelivery.extra_runs;
        if(matchIds[deliveryId]){
            
            if(!delivery[bowlerTeam]){
                delivery[bowlerTeam] = 0
            }

            delivery[bowlerTeam] += Number(extraRuns);
    
        }
        return delivery;
    } , {})
    return result;
    
}   


function extraRunPerTeam2016Loops(matches , deliveries){
    const matchIds = {};
    
    for(let i = 0; i < matches.length; i++){
        const season = matches[i].season;
        const id = matches[i].id;

        if(season === '2016'){
            if(!matchIds[id]){
                matchIds[id] = true
            }
        }
        
    }

    const result = {}
    for(let i = 0; i < deliveries.length; i++){
        const mId = deliveries[i].match_id;
        const bowlingTeam = deliveries[i].bowling_team;
        const extraRuns = deliveries[i].extra_runs;

        if(matchIds[mId]){
            if(!result[bowlingTeam]){
                result[bowlingTeam] = 0 
            }

            result[bowlingTeam] += Number(extraRuns);
        }

    }

    return result;
}



module.exports = {extraRunPerTeam2016Loops , extraRunPerTeamIn2016Methods}

// csvToJson("matches" , (match) => {
//     csvToJson("deliveries" , (delivery) => {
//         const methods = extraRunPerTeamIn2016Methods(match , delivery);
//         console.log("Method :: ====================");
//         console.log(methods);
        
        
//         const loops = extraRunPerTeam2016Loops(match , delivery);
//         console.log("Loops :: ====================");
//         console.log(loops);

//     })
// })
