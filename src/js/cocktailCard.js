import { fetchCocktails } from "./js/cocktailsAPI";


const gallery = document.querySelector('body');


fetchCocktails('a')
    .then(cardBuilder)
    .catch(error => {console.log(error);});

 function cardBuilder(cocktail) {
    const markup = cocktail.drinks.map(
        ({ strDrinkThumb, strDrink }) =>
            `<div>
                <img src="${strDrinkThumb}" alt="${strDrink}"/>
                <h2>${strDrink}</h2>
                <button type='button'>Learn more</button>
                <button type='button'>Add to ♡</button>
            </div>`
    );
     gallery.innerHTML = markup.join('')
}