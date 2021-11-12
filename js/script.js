import { leagueGenerator } from './league_generator.js'
import { sportsMenuGen } from './sports_menu.js'
import { btnQuote } from './render.js'

// fetch('https://api.the-odds-api.com/v4/sports/soccer_italy_serie_a/odds/?regions=eu&markets=h2h&apiKey=b23d676f5e3b2a870731ff6cd8be8ec7')
//             .then(res=>res.json())
//             .then((serieA) => {
//                 serieAData = serieA;
//                 leagueGenerator();
//             })

// let serieAData = []



/// API LISTA SPORT
// fetch('https://api.the-odds-api.com/v4/sports/?apiKey=b23d676f5e3b2a870731ff6cd8be8ec7')
//             .then(res=>res.json())
//             .then((serieA) => {
// console.log(serieA)
//             })

sportsMenuGen(sportsData);
leagueGenerator(serieAData);
btnQuote();