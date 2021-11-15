export function h2hGen(homeTeam, awayTeam, eventHour, eventDate, bestQuoteObj) {
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
            oddsHomeDiv.textContent = item.price;
            quoteDiv.appendChild(oddsHomeDiv);
        }
    })

    const drawSign = bestQuoteObj.markets[0].outcomes.forEach((item) => {
        if (item.name === 'Draw') {
            const oddsHomeDiv = document.createElement('div');
            oddsHomeDiv.className = 'odds';
            oddsHomeDiv.textContent = item.price;
            quoteDiv.appendChild(oddsHomeDiv);
        }
    })

    const awaySign = bestQuoteObj.markets[0].outcomes.forEach((item) => {
        if (item.name === awayTeam) {
            const oddsHomeDiv = document.createElement('div');
            oddsHomeDiv.className = 'odds';
            oddsHomeDiv.textContent = item.price;
            quoteDiv.appendChild(oddsHomeDiv);
        }
    })
    btnQuote();
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
    })


    btnQuote();
}


function btnQuote() {
    const btns = [...dailyContent.querySelectorAll('.odds')];
    btns.forEach((item) => {
        item.addEventListener('click', (event) => {
            console.log(item)
            item.classList.toggle('active')
        })
    })

}

const dailyContent = document.querySelector('.daily_content')
let dateForLoop;
