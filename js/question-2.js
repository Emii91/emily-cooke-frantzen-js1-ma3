const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=45e46d9f4d3c4006b0e478e41836fdd4";

const resultsContainer = document.querySelector(".results");

async function getGames() {
    try {
        
        const response = await fetch(url);
        
        const results = await response.json();
        
        console.log(results);
    } catch (error) {
        
        console.log(error);
        
        resultsContainer.innerHTML = error
    }
}

getGames();