import {refs} from "../refs/selectorRefs";   
import { saveCocktail } from '../localStorage/getId';
import { pageFavCocktails } from "./favCocktailsPage";

export function removeFav(e) {
    refs.listFavCock.addEventListener('click', removeFromFavorite);

    function removeFromFavorite(e) {
        if (!e.target.dataset.favorite) {
        return;
    }
        saveCocktail(e);
        refs.listFavCock.innerHTML = '';
        pageFavCocktails();
    };
    
}