import { getCocktailsByLetter } from "../fetch/fetchCardByLetter";
import { getRandomCocktail } from "../fetch/fetchRandomCard"
import { getCocktailByWord } from "../fetch/fetchCardByWord";
import { cardBuilder } from "../builders/cardBuilder";
import { randomCardBuilder } from "../builders/cardBuilderRandom";
import { Notify } from "notiflix";
import { refs } from '../selectorRefs';
import { errorMarkup } from "../createMarkup";



export function findCocktailBySearch(e) {
    e.preventDefault()
    const { searchQuery } = e.target.elements
    const formValue = searchQuery.value.trim().toLowerCase()
    console.log("🚀 ~ file: searchCocktail.js ~ line 12 ~ findCocktailBySearch ~ formValue", formValue)
    // console.log(e);

    if (formValue.length === 0) {
        Notify.info(`Please, write you cocktail`)
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
                refs.gallery.innerHTML = errorMarkup();
                Notify.failure(`We haven't that cocktail. Please, write another symbol`)
                console.log(error);
            })
    } 
    else {
        getCocktailByWord(formValue)
        .then(cardBuilder)
            .catch(error => {
                refs.gallery.innerHTML = errorMarkup();
                Notify.failure(`We haven't that cocktail. Please, check your word`)
            })
    }
   
}


