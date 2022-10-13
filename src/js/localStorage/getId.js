import { data, FAVORITE_KEY, INGREDIENTS_KEY } from './dataStorage';

export function saveCocktail(e) {
    if (!e.target.dataset.favorite) {
        return;
    }
    data.cocktails = e.target.id;

    const parsedArray = JSON.parse(localStorage.getItem(FAVORITE_KEY));
    if (!parsedArray.includes(e.target.id)) {
        e.target.textContent = 'Add to';
        return;
    }
    e.target.textContent = 'Remove';   
};

export function saveIngredient(e) {
    if (!e.target.dataset.ingredient) {
        return;
    }
    data.ingredients = e.target.name;

    // const parsedArray = JSON.parse(localStorage.getItem(INGREDIENTS_KEY));
    // if (!parsedArray.includes(e.target.name)) {
    //     e.target.textContent = 'Add to';
    //     return;
    // }
    // e.target.textContent = 'Remove';  
};