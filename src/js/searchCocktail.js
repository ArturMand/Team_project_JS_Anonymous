import { getCocktailsByLetter, getCocktailByWord, getRandomCocktail} from "./cocktailsAPI";
import { cardBuilder, randomCardBuilder} from "./cocktailCard";
import { Notify } from "notiflix";

const cocktailList = document.querySelector('.cocktails__list');


export function findCocktailBySearch(e) {
    e.preventDefault()
    const { searchQuery } = e.target.elements
    const formValue = searchQuery.value.trim().toLowerCase()
    // console.log(e);

    if (formValue.length === 0) {
        // console.log(e.target.value.length);
        cocktailList.innerHTML = '';
        getRandomCocktail()
    .then(randomCardBuilder)
    .catch(error => { console.log(error); })
        return
    }
    else if (formValue.length === 1) {
        getCocktailsByLetter(formValue)
            .then(cardBuilder)
            .catch(error => { console.log(error); })
    } 
    else {
        getCocktailByWord(formValue)
        .then(cardBuilder)
            .catch(error => {
                Notify.failure(`you must die!`)
                // console.log(error);
            })
    }
   
}


