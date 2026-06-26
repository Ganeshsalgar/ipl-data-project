// Top 10 economical bowlers in the year 2015
const csvToJson = require("../utils/csvToJson");

function top10EconomicalBowlerMethods(deliveries , matches){

    const Ids = matches.reduce((acc , match) => {
        const season = match.season;
        const mId = match.id;

        if(season === '2015'){
            if(!acc[mId]){
                acc[mId] = true;
            }
        }
        return acc;
    }, {});

    const bowlerData = deliveries.reduce((acc ,delivery) => {
        const deliveryId = delivery.match_id;
        const bolwer = delivery.bowler;
        const totalRuns = Number(delivery.batsman_runs) + Number(delivery.wide_runs) + Number(delivery.noball_runs);
        const wideRuns = delivery.wide_runs;
        const noBallsRuns = delivery.noball_runs;

        if(Ids[deliveryId]){

            if(!acc[bolwer]){
                acc[bolwer] = {
                    runs : 0,
                    balls : 0,
                }
            }

            acc[bolwer].runs += Number(totalRuns);
            
            if(wideRuns === '0' && noBallsRuns === "0"){
                acc[bolwer].balls++;
            }
        }
        return acc;
    }, {})

    const economicalScore =  Object.entries(bowlerData).reduce((acc , curr) => {
        const runs = curr[1].runs;
        const balls = curr[1].balls;
        const bolwerName = curr[0];

        const economy = (runs * 6) / balls;

        acc[bolwerName] = (economy).toFixed(2);        
        return acc;
    }, {});


    const sortedBolwer = Object.entries(economicalScore).sort((a , b )=> a[1] - b[1]);

    const top10 = {};

    for(let i = 0; i < 10; i++){
        const name = sortedBolwer[i][0];
        const score = (sortedBolwer[i][1]);
        top10[name] = score;
    }

    return top10;
}


function top10EconomicalBowlerLoops(deliveries , matches){
    const Ids = {};

    for(let i = 0; i < matches.length; i++){
        const season = matches[i].season;
        const mId = matches[i].id;

        if(season === "2015"){
            if(!Ids[mId]){
                Ids[mId] = true;
            }
        }
    }

    const bowlerData = {};
    for(let i = 0; i < deliveries.length; i++){
        const matchId = deliveries[i].match_id;
        const bowler = deliveries[i].bowler;
        const totalRuns = Number(deliveries[i].batsman_runs) + Number(deliveries[i].wide_runs) + Number(deliveries[i].noball_runs);

        const wideRuns = deliveries[i].wide_runs;
        const noBallsRuns = deliveries[i].noball_runs;

        if(Ids[matchId]){
            if(!bowlerData[bowler]){
                bowlerData[bowler] = {
                    runs : 0,
                    balls : 0
                }
            }    

            bowlerData[bowler].runs += totalRuns;

            if(wideRuns === '0' && noBallsRuns === '0'){
                bowlerData[bowler].balls++;
            }


        }
    }


    const bowlerEconomy = {};
    const ArrayofBowler = Object.entries(bowlerData);
    for(let i = 0; i < ArrayofBowler.length; i++){
        // console.log(ArrayofBowler[i])
        const runs = ArrayofBowler[i][1].runs;
        const balls = ArrayofBowler[i][1].balls;
        const name = ArrayofBowler[i][0];


        const economical = (runs * 6) / balls;

        bowlerEconomy[name] = economical.toFixed(2);
    }

    // console.log(bowlerEconomy);
    const finalArray = Object.entries(bowlerEconomy);

    finalArray.sort((a , b) => a[1] - b[1]);

    const result = {}

    for(let  i = 0; i < 10; i++){
        result[finalArray[i][0]] = finalArray[i][1];
    }
    return result;
}


module.exports = {top10EconomicalBowlerLoops , top10EconomicalBowlerMethods};

// csvToJson("matches" , (match) => {
//         csvToJson("deliveries" , (deliveries) => {
//         const methods = top10EconomicalBowlerMethods(deliveries , match);
//         console.log("Methods :: ==============");
//         console.log(methods);

//         const loops = top10EconomicalBowlerLoops(deliveries , match);
//         console.log("loops :: ==============");
//         console.log(loops);

        
//     })
// })


