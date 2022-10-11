import { getCocktailsByLetter, getCocktailByWord, getRandomCocktail } from "./js/cocktailsAPI";
import { cardBuilder, randomCardBuilder } from "./js/cocktailCard";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addHeroSearch } from "./js/heroAlphabet";
import { mobileMenu } from './js/mobile-menu';
import { findCocktailBySearch } from "./js/searchCocktail";
// import debounce from 'lodash.debounce';
import { refs } from './js/selectorRefs';
import { searchByABC } from './js/searchByABC';


mobileMenu();
  
getRandomCocktail()
    .then(randomCardBuilder)
    .catch(error => { console.log(error); })

refs.searchForm.addEventListener('submit', findCocktailBySearch)

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
addHeroSearch(letters)

refs.list.addEventListener('click', searchByABC)

