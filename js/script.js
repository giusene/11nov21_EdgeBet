fetch('https://api.the-odds-api.com/v4/sports/soccer_italy_serie_a/odds/?regions=eu&markets=h2h&apiKey=b23d676f5e3b2a870731ff6cd8be8ec7')
            .then(res=>res.json())
            .then((serieA) => {
                serieAData = serieA;
                serieAFunc();
            })

let serieAData = []
const eventLineDiv = document.querySelector('.event')

function singleEventGen(homeTeam, awayTeam, homeQuote, drawQuote, awayQuote, eventDate) {
    let eventDiv = document.createElement('div');
    eventDiv.className = 'match';
    eventLineDiv.appendChild(eventDiv);

    let dateDiv = document.createElement('div');
    dateDiv.className = 'date';
    dateDiv.textContent = eventDate.substring(0, eventDate.length -3);
    eventDiv.appendChild(dateDiv);

    let matchDiv = document.createElement('div');
    matchDiv.className = 'teams';
    matchDiv.textContent = `${homeTeam} - ${awayTeam}`;
    eventDiv.appendChild(matchDiv);
    
    let quoteDiv = document.createElement('div');
    quoteDiv.className = 'quote';
    eventDiv.appendChild(quoteDiv);

    let oddsHomeDiv = document.createElement('div');
    oddsHomeDiv.className = 'odds';
    oddsHomeDiv.textContent = `${homeQuote}`;
    quoteDiv.appendChild(oddsHomeDiv);

    let oddsDrawDiv = document.createElement('div');
    oddsDrawDiv.className = 'odds';
    oddsDrawDiv.textContent = `${drawQuote}`;
    quoteDiv.appendChild(oddsDrawDiv);

    let oddsVisitorsDiv = document.createElement('div');
    oddsVisitorsDiv.className = 'odds';
    oddsVisitorsDiv.textContent = `${awayQuote}`;
    quoteDiv.appendChild(oddsVisitorsDiv);

}

function serieAFunc() {
    serieAData.forEach((event) => {
        let homeTeam = event['home_team'];
        let awayTeam = event['away_team'];
        let homeObj = event['bookmakers'][0]['markets'][0]['outcomes'].filter((team) => team.name === homeTeam)
        let awayObj = event['bookmakers'][0]['markets'][0]['outcomes'].filter((team) => team.name === awayTeam)
        let drawObj = event['bookmakers'][0]['markets'][0]['outcomes'].filter((team) => team.name === 'Draw')
        let homeQuote = homeObj[0].price;
        let awayQuote = awayObj[0].price;
        let drawQuote = drawObj[0].price;
    
        let dateObj = new Date(event['commence_time'].replace(/T|Z/g, ' '));
        let eventDate = (dateObj.toLocaleString('it-IT').replace(', ', '\n'));
        singleEventGen(homeTeam, awayTeam, homeQuote, drawQuote, awayQuote, eventDate)
    })
}