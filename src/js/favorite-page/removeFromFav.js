import {refs} from "../refs/selectorRefs";   
import { saveCocktail } from '../localStorage/getId';
import { pageFavCocktails } from "./favCocktailsPage";

export function removeFav() {
    refs.listFavCock.addEventListener('click', removeFromFavorite);

    function removeFromFavorite(e) {
        saveCocktail(e);
        refs.listFavCock.innerHTML = '';
        pageFavCocktails();
    };
}