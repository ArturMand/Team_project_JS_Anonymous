import { getCocktailsByLetter } from "../render/renderCardByLetter";
import { getRandomCocktail } from "../render/renderRandomCard"
import { getCocktailByWord } from "../render/renderCardByWord";
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
        // console.log(e.target.value.length);
        refs.gallery.innerHTML = errorMarkup();
        Notify.failure(`Please, write you cocktail`)
    //     getRandomCocktail()
    // .then(randomCardBuilder)
    // .catch(error => { console.log(error); })
    //     return
        
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
                // console.log(error);
            })
    }
   
}

