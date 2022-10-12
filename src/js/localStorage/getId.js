import { data } from './dataStorage';

export function saveCocktail(e) {
    console.log(e.target);
    if (!e.target.dataset.favorite) {
        return;
    }
    data.cocktails = e.target.id;
};

export function saveIngredient(e) {
    if (!e.target.dataset.ingredient) {
        return;
    }
    data.ingredients = e.target.id;
};