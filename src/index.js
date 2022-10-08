import { fetchCocktails, getRandomCocktail } from "./js/cocktailsAPI";
import { cardBuilder, randomCardBuilder } from "./js/cocktailCard";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { addHeroSearch } from "./js/heroAlphabet";





  
getRandomCocktail()
    .then(randomCardBuilder)
    .catch(error => { console.log(error); })
    

