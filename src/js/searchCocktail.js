import { getCocktailsByLetter, getCocktailByWord} from "./cocktailsAPI";
import { cardBuilder} from "./cocktailCard";




export function findCocktailBySearch(e) {
    console.dir(e.target.value.length);

    if (e.target.value.length === 1) {
        getCocktailsByLetter(e.target.value.trim().toLowerCase())
            .then(cardBuilder)
            .catch(error => { console.log(error); })
    } else {
        getCocktailByWord(e.target.value.trim().toLowerCase())
        .then(cardBuilder)
        .catch(error => { console.log(error); })
    };
}


