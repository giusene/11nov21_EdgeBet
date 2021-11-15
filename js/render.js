import { addToCart, cart } from "./cart.js";

export function h2hGen(homeTeam, awayTeam, eventHour, eventDate, bestQuoteObj, idMatch) {
    if (eventDate !== dateForLoop) {
        dateForLoop = eventDate;
        const lineDateDiv = document.createElement('div');
        lineDateDiv.className = 'match_first_line';
        lineDateDiv.innerHTML = `<div class="date">${eventDate}</div><div class="teams"></div>`
        dailyContent.appendChild(lineDateDiv)
        const quoteDiv = document.createElement('div');
        quoteDiv.className = 'quote';
        lineDateDiv.appendChild(quoteDiv);
        const homeSign = bestQuoteObj.markets[0].outcomes.forEach((item) => {
            if (item.name === homeTeam) {
                const oddDiv = document.createElement('div');
                oddDiv.className = 'odds-first';
                oddDiv.setAttribute('id', `${eventDate}-home-quote-first-line`)
                oddDiv.textContent = '1';
                quoteDiv.appendChild(oddDiv);
            }

        })
        const awaySign = bestQuoteObj.markets[0].outcomes.forEach((item) => {
            if (item.name === awayTeam) {
                const oddDiv = document.createElement('div');
                oddDiv.className = 'odds-first';
                oddDiv.setAttribute('id', `${eventDate}-away-quote-first-line`)
                oddDiv.textContent = '2';
                quoteDiv.appendChild(oddDiv);
            }
        })

        const drawSign = bestQuoteObj.markets[0].outcomes.forEach((item) => {
            if (item.name === 'Draw') {
                const oddDiv = document.createElement('div');
                oddDiv.className = 'odds-first';
                oddDiv.setAttribute('id', `${eventDate}-draw-quote-first-line`)
                oddDiv.textContent = 'X';
                const awayQuote = document.getElementById(`${eventDate}-away-quote-first-line`);
                quoteDiv.insertBefore(oddDiv, awayQuote);
            }
        })

    }

    let eventDiv = document.createElement('div');
    eventDiv.className = 'match';
    dailyContent.appendChild(eventDiv);

    let dateDiv = document.createElement('div');
    dateDiv.className = 'date';
    dateDiv.textContent = eventHour.substring(0, eventHour.length - 3);
    eventDiv.appendChild(dateDiv);

    let matchDiv = document.createElement('div');
    matchDiv.className = 'teams';
    matchDiv.textContent = `${homeTeam} - ${awayTeam}`;
    eventDiv.appendChild(matchDiv);

    let bookmakerDiv = document.createElement('div');
    bookmakerDiv.className = 'bookmaker';
    bookmakerDiv.textContent = bestQuoteObj.key;
    eventDiv.appendChild(bookmakerDiv);

    const quoteDiv = document.createElement('div');
    quoteDiv.className = 'quote';
    eventDiv.appendChild(quoteDiv);

    const homeSign = bestQuoteObj.markets[0].outcomes.forEach((item) => {
        if (item.name === homeTeam) {
            const oddsHomeDiv = document.createElement('div');
            oddsHomeDiv.className = 'odds';
            oddsHomeDiv.setAttribute('id', `${idMatch}€€1`);
            oddsHomeDiv.setAttribute('name', item.name);
            oddsHomeDiv.textContent = item.price;
            quoteDiv.appendChild(oddsHomeDiv);
            btnQuote(oddsHomeDiv)
        }
    })

    const drawSign = bestQuoteObj.markets[0].outcomes.forEach((item) => {
        if (item.name === 'Draw') {
            const oddsHomeDiv = document.createElement('div');
            oddsHomeDiv.className = 'odds';
            oddsHomeDiv.setAttribute('id', `${idMatch}€€x`);
            oddsHomeDiv.setAttribute('name', item.name);
            oddsHomeDiv.textContent = item.price;
            quoteDiv.appendChild(oddsHomeDiv);
            btnQuote(oddsHomeDiv)
        }
    })

    const awaySign = bestQuoteObj.markets[0].outcomes.forEach((item) => {
        if (item.name === awayTeam) {
            const oddsHomeDiv = document.createElement('div');
            oddsHomeDiv.className = 'odds';
            oddsHomeDiv.setAttribute('id', `${idMatch}€€2`);
            oddsHomeDiv.setAttribute('name', item.name);
            oddsHomeDiv.textContent = item.price;
            quoteDiv.appendChild(oddsHomeDiv);
            btnQuote(oddsHomeDiv)
        }
    })
}

export function outrightsGen(bestOutrightsQuotes) {
    const lineDateDiv = document.createElement('div');
    lineDateDiv.className = 'match_first_line';
    lineDateDiv.innerHTML = `<div class="date"></div><div class="teams"></div>`
    dailyContent.appendChild(lineDateDiv)
    const quoteDiv = document.createElement('div');
    quoteDiv.className = 'quote';
    lineDateDiv.appendChild(quoteDiv);
    const oddDiv = document.createElement('div');
    oddDiv.className = 'odds-first';

    oddDiv.textContent = 'winner';
    quoteDiv.appendChild(oddDiv);

    bestOutrightsQuotes.forEach((singleQuote) => {
        let eventDiv = document.createElement('div');
        eventDiv.className = 'match';
        dailyContent.appendChild(eventDiv);

        let matchDiv = document.createElement('div');
        matchDiv.className = 'teams';
        matchDiv.textContent = singleQuote[0].name;
        eventDiv.appendChild(matchDiv);

        let bookmakerDiv = document.createElement('div');
        bookmakerDiv.className = 'bookmaker';
        bookmakerDiv.textContent = singleQuote[0].bookmaker;
        eventDiv.appendChild(bookmakerDiv);

        const quoteDiv = document.createElement('div');
        quoteDiv.className = 'quote';
        eventDiv.appendChild(quoteDiv);

        const oddsHomeDiv = document.createElement('div');
        oddsHomeDiv.className = 'odds';
        oddsHomeDiv.textContent = singleQuote[0].price;
        quoteDiv.appendChild(oddsHomeDiv);
        btnQuote(oddsHomeDiv)
    })


}


function btnQuote(btn) {
    btn.addEventListener('click', (event) => {
        const keys = btn.id.split('€€');
        const bet = {
            sport_key: keys[1],
            id: keys[0],
            market_key: keys[2],
            outcome_name: btn.getAttribute('name')
        }
    btn.classList.toggle('active')
    addToCart(bet)
    })
}

const dailyContent = document.querySelector('.daily_content')
let dateForLoop;
