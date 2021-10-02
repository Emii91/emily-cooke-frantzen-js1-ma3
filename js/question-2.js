const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=45e46d9f4d3c4006b0e478e41836fdd4";

const resultsContainer = document.querySelector(".results");

async function getGames() {

    const response = await fetch(url);

    const results = await response.json();

    const facts = results.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
        console.log(facts[i].name);

        if (i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div class="results">${facts[i].name}</div>`
    }

}

getGames();