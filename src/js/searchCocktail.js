import { getCocktailsByLetter } from "./renderCardByLetter";
import { getRandomCocktail } from "./renderRandomCard"
import { getCocktailByWord } from "./renderCardByWord";
import { cardBuilder } from "./cardBuilder";
import { randomCardBuilder } from "./cardBuilderRandom";
import { Notify } from "notiflix";
import { refs } from './selectorRefs';



export function findCocktailBySearch(e) {
    e.preventDefault()
    const { searchQuery } = e.target.elements
    const formValue = searchQuery.value.trim().toLowerCase()
    console.log("🚀 ~ file: searchCocktail.js ~ line 12 ~ findCocktailBySearch ~ formValue", formValue)
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
                Notify.failure(`We hav't that cocktail`)
                console.log(error);
            })
    } 
    else {
        getCocktailByWord(formValue)
        .then(cardBuilder)
            .catch(error => {
                Notify.failure(`We hav't that cocktail`)
                // console.log(error);
            })
    }
   
}


