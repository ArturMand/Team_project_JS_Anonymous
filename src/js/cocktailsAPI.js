export function fetchCocktails(letter) {
    const URL = 'https://thecocktaildb.com/api/json/v1/1/'
    return fetch(`${URL}search.php?f=${letter}`)
            .then(response => {
                if (!response.ok) {
                    // Notify.failure("Oops, there is no cocktail with that letter");
                    throw new Error(response.status);
                }
                return response.json();
            })}