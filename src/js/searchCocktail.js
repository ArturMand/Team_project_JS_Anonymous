import { fetchCocktails} from "./cocktailsAPI";
import { cardBuilder} from "./cocktailCard";


const searchForm = document.querySelector('#form__search');

searchForm.addEventListener('input', findCocktailBySearch)

export function findCocktailBySearch(e) {
    fetchCocktails(e.target.value.trim().toLowerCase())
    .then(cardBuilder)
    .catch(error => { console.log(error); });
}