import {refs} from "../refs/selectorRefs";   
import { saveIngredient } from '../localStorage/getId';
import { pageFavIngredients } from "./favIngredientPage";

export function removeFav() {
    refs.listFavIngr.addEventListener('click', removeFromFavorite);

    function removeFromFavorite(e) {
        if (!e.target.dataset.ingredient) {
        return;
    }
        saveIngredient(e);
        refs.listFavIngr.innerHTML = '';
        pageFavIngredients();
    };
}