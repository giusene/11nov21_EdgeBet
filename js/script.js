import { leagueGenerator } from './league_generator.js'
import { sportsMenuGen } from './sports_menu.js'
import { cart } from './cart.js'
import { getSports } from './getdata.js'
import { getEvents } from './getdata.js'
 


document.addEventListener('DOMContentLoaded', () => {
    sportsMenuGen(sportsData);
    leagueGenerator(soccerData);
})