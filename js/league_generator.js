import { h2hGen } from "./render.js";
import { outrightsGen } from "./render.js";

export function leagueGenerator(jsonData) {
    dailyContent.innerHTML = '';

    if (jsonData[0].has_outrights) {
        outrightEvent(jsonData)
    } else if (!jsonData[0].has_outrights) {
        h2hEvent(jsonData)
    } else {
        // (event.bookmakers[0] === undefined)
        return;
    }

}

function outrightEvent(jsonData) {
    const leagueName = document.querySelector('.sport_country__name')
    const countryName = document.querySelector('.sport_country__country')

    leagueName.textContent = jsonData[0]['sport_title'].split(' - ')[0];
    countryName.textContent = jsonData[0]['sport_key'].split('_')[0];


    jsonData.forEach((event) => {

        if (event.bookmakers[0] === undefined) {
            return;
        } else {

            let outrightsQuotes = event['bookmakers'].map((item) => {
                let newItem = {
                    key: item.key,
                    last_update: item.last_update,
                    markets: item.markets.filter((a) => {
                        return a["key"] === "outrights";
                    }),
                    title: item.title
                }
                return newItem;
            })

            let outrightsQuotesSorting = outrightsQuotes.sort((itemA, itemB) => {
                if (itemA.markets[0].outcomes.reduce((a, b) => a + b.price, 0) < itemB.markets[0].outcomes.reduce((a, b) => a + b.price, 0)) {
                    return 1;
                }
                if (itemA.markets[0].outcomes.reduce((a, b) => a + b.price, 0) > itemB.markets[0].outcomes.reduce((a, b) => a + b.price, 0)) {
                    return -1;
                }
                return 0
            })

            const allNames = outrightsQuotesSorting[0].markets[0].outcomes.map((obj) => {
                return obj.name
            })       

            const outrightsList = allNames.map((name) => {
                let arrayMix = []
                const bookmakersLoop = outrightsQuotesSorting.forEach((bookmaker) => {
                    const playersLoop = bookmaker.markets[0].outcomes.forEach((player) => {
                        if (player.name === name) {
                            let obj = {
                                name: player.name,
                                price: player.price,
                                bookmaker: bookmaker.key
                            }
                            arrayMix.push(obj) 
                        }
                    })
                })
                return arrayMix
            })

            const bestOutrightsQuotes = outrightsList.map((player) => {
                const playerSort = player.sort((a,b) => {
                    if (a.price < b.price) {
                        return 1
                    }
                    if (a.price > b.price) {
                        return -1
                    }
                    return 0
                })
                return playerSort;
            })
            
            outrightsGen(bestOutrightsQuotes)

            // let dateObj = new Date(event['commence_time'].replace(/T|Z/g, ' '));
            // let eventDate = (dateObj.toLocaleString('it-IT').split(', '));
            // singleEventGen(homeTeam, awayTeam, eventDate[1], eventDate[0].replaceAll('/', '.'), bestH2hQuote[0])
        }
    })
}


function h2hEvent(jsonData) {
    const leagueName = document.querySelector('.sport_country__name')
    const countryName = document.querySelector('.sport_country__country')

    const sportTitle = jsonData[0]['sport_title'].split(' - ');
    leagueName.textContent = sportTitle[0];
    countryName.textContent = sportTitle[1];

    jsonData.forEach((event) => {

        if (event.bookmakers[0] === undefined) {
            return;
        } else {

            let homeTeam = event['home_team'];
            let awayTeam = event['away_team'];

            let h2hQuotes = event['bookmakers'].map((item) => {
                let newItem = {
                    key: item.key,
                    last_update: item.last_update,
                    markets: item.markets.filter((a) => {
                        return a["key"] === "h2h";
                    }),
                    title: item.title
                }
                return newItem;
            })

            let bestH2hQuote = h2hQuotes.sort((itemA, itemB) => {
                if (itemA.markets[0].outcomes.reduce((a, b) => a + b.price, 0) < itemB.markets[0].outcomes.reduce((a, b) => a + b.price, 0)) {
                    return 1;
                }
                if (itemA.markets[0].outcomes.reduce((a, b) => a + b.price, 0) > itemB.markets[0].outcomes.reduce((a, b) => a + b.price, 0)) {
                    return -1;
                }
                return 0
            })

            let dateObj = new Date(event['commence_time'].replace(/T|Z/g, ' '));
            let eventDate = (dateObj.toLocaleString('it-IT').split(', '));
            h2hGen(homeTeam, awayTeam, eventDate[1], eventDate[0].replaceAll('/', '.'), bestH2hQuote[0])
        }
    })
}



const dailyContent = document.querySelector('.daily_content');