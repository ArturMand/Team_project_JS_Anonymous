import { getCocktailsByLetter } from "../fetch/fetchCardByLetter";
import { getRandomCocktail } from "../fetch/fetchRandomCard"
import { getCocktailByWord } from "../fetch/fetchCardByWord";
import { cardBuilder } from "../builders/cardBuilder";
import { randomCardBuilder } from "../builders/cardBuilderRandom";
import { Notify } from "notiflix";
import { refs } from '../refs/selectorRefs';




export function findCocktailBySearch(e) {
    e.preventDefault()
    const { searchQuery } = e.target.elements
    const formValue = searchQuery.value.trim().toLowerCase()
    // console.log("🚀 ~ file: searchCocktail.js ~ line 12 ~ findCocktailBySearch ~ formValue", formValue)

    if (formValue.length === 0) {
        Notify.info(`Please, write your cocktail`)
        refs.gallery.innerHTML = ''
        getRandomCocktail()
        .then(randomCardBuilder)
        .catch(error => { console.log(error); })
        return
        
    }
    else if (formValue.length === 1) {
        getCocktailsByLetter(formValue)
            .then(cardBuilder)
            .catch(error => {
                console.log(error);
            })
    } 
    else {
        getCocktailByWord(formValue)
        .then(cardBuilder)
            .catch(error => {
                console.log(error);
            })
    }
   
}


