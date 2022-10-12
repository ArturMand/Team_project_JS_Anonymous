import {data, FAVORITE_KEY, INGREDIENTS_KEY} from './dataStorage';

export function saveData() {
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(data.cocktails));
};

export function saveDataIngr() {
    localStorage.setItem(INGREDIENTS_KEY, JSON.stringify(data.ingredients));
};