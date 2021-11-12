export function singleEventGen(homeTeam, awayTeam, homeQuote, drawQuote, awayQuote, eventHour, eventDate) {
    if (eventDate !== dateForLoop) {
        dateForLoop = eventDate;
        let lineDateDiv = document.createElement('div');
        lineDateDiv.className = 'match_first_line';
        lineDateDiv.innerHTML = `<div class="date">${eventDate}</div><div class="teams"></div>
                        <div class="quote"><div class="odds-first">1</div><div class="odds-first">X</div><div class="odds-first">2</div></div>`;
        dailyContent.appendChild(lineDateDiv)
    }

    let eventDiv = document.createElement('div');
    eventDiv.className = 'match';
    dailyContent.appendChild(eventDiv);
    
    let dateDiv = document.createElement('div');
    dateDiv.className = 'date';
    dateDiv.textContent = eventHour.substring(0, eventHour.length -3);
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

const dailyContent = document.querySelector('.daily_content')
let dateForLoop;