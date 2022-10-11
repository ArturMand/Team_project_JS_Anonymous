import { getCocktailsByLetter, getCocktailByWord, getRandomCocktail} from "./cocktailsAPI";
import { cardBuilder, randomCardBuilder} from "./cocktailCard";
import { Notify } from "notiflix";
import { refs } from './selectorRefs';



export function findCocktailBySearch(e) {
    e.preventDefault()
    const { searchQuery } = e.target.elements
    const formValue = searchQuery.value.trim().toLowerCase()
    // console.log(e);

    if (formValue.length === 0) {
        // console.log(e.target.value.length);
        refs.cocktailList.innerHTML = '';
        getRandomCocktail()
    .then(randomCardBuilder)
    .catch(error => { console.log(error); })
        return
    }
    else if (formValue.length === 1) {
        getCocktailsByLetter(formValue)
            .then(cardBuilder)
            .catch(error => {
                Notify.failure(`you must die!`)
                console.log(error);
            })
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


