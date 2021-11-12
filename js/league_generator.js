import { singleEventGen } from "./render.js";

export function leagueGenerator(jsonData) {
    const sportTitle = serieAData[0]['sport_title'].split(' - ');
    leagueName.textContent = sportTitle[0];
    countryName.textContent = sportTitle[1];
    
    jsonData.forEach((event) => {
        let homeTeam = event['home_team'];
        let awayTeam = event['away_team'];
        let homeObj = event['bookmakers'][0]['markets'][0]['outcomes'].filter((team) => team.name === homeTeam)
        let awayObj = event['bookmakers'][0]['markets'][0]['outcomes'].filter((team) => team.name === awayTeam)
        let drawObj = event['bookmakers'][0]['markets'][0]['outcomes'].filter((team) => team.name === 'Draw')
        let homeQuote = homeObj[0].price;
        let awayQuote = awayObj[0].price;
        let drawQuote = drawObj[0].price;
    
        let dateObj = new Date(event['commence_time'].replace(/T|Z/g, ' '));
        let eventDate = (dateObj.toLocaleString('it-IT').split(', '));
        singleEventGen(homeTeam, awayTeam, homeQuote, drawQuote, awayQuote, eventDate[1], eventDate[0])
    })
}

const leagueName = document.querySelector('.sport_country__name')
const countryName = document.querySelector('.sport_country__country')