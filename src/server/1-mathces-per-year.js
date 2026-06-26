const csvToJson = require("../utils/csvToJson")

// Number of matches played per year for all the years in IPL.

// with Methods 

function getmatchesperyear(matches){
    // console.log(matches[0]);

    const result = {}
    
    matches.reduce((acc ,curr) =>{
        const season = curr.season
        if(!result[season]){
            result[season] = 0;
        }

        result[season]++;

    } , result)    

    return result;
}


function getmatchesperyearWithLoops(match){
    // console.log(match[0]);

    const result = {}

    for(let i = 0; i < match.length; i++){
        const season = match[i].season;

        if(!result[season]){
            result[season] = 0;
        }


        result[season]++;
    }

    return result;
}


csvToJson("matches" , (match) => {
    const result = getmatchesperyear(match);
    console.log('withMethods ::: ======================');
    console.log(result);
    
    const resultLoops = getmatchesperyearWithLoops(match);
    console.log('withLoops ::: ======================');
    console.log(resultLoops);
    
})







module.exports = {getmatchesperyear , getmatchesperyearWithLoops};

