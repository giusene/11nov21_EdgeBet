import { sportsMenuGen } from './sports_menu.js';
import { leagueGenerator } from './league_generator.js';

/// API LISTA SPORT PER MENU
export function getSports() {
    fetch('https://api.the-odds-api.com/v4/sports/?apiKey=b23d676f5e3b2a870731ff6cd8be8ec7')
    .then(res => res.json())
    .then((data) => sportsMenuGen(data))
}

// API LISTA EVENTI 
export function getEvents(sportKey) {
    fetch(`https://api.the-odds-api.com/v4/sports/${sportKey}/odds/?regions=eu&markets=&apiKey=b23d676f5e3b2a870731ff6cd8be8ec7`)
                .then(res=>res.json())
                .then((data) => leagueGenerator(data))
}
