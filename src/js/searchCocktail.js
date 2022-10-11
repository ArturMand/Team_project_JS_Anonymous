import { getCocktailsByLetter, getCocktailByWord, getRandomCocktail} from "./cocktailsAPI";
import { cardBuilder, randomCardBuilder} from "./cocktailCard";

const cocktailList = document.querySelector('.cocktails__list');


export function findCocktailBySearch(e) {
    if (e.target.value.length === 0) {
        console.log(e.target.value.length);
        cocktailList.innerHTML = '';
        getRandomCocktail()
    .then(randomCardBuilder)
    .catch(error => { console.log(error); })
        return
    }
    else if (e.target.value.length === 1) {
        getCocktailsByLetter(e.target.value.trim().toLowerCase())
            .then(cardBuilder)
            .catch(error => { console.log(error); })
    } 
    else {
        getCocktailByWord(e.target.value.trim().toLowerCase())
        .then(cardBuilder)
        .catch(error => { console.log(error); })
    }
   
}


