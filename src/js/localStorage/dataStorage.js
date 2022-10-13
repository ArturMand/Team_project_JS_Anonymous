export const FAVORITE_KEY = 'storage-favorite';
export const INGREDIENTS_KEY = 'favorite-ingredients';
import { saveData, saveDataIngr } from './saveStorage';
JSON.parse(localStorage.getItem(FAVORITE_KEY));
export const data = {
  _cocktails: null ? [] : JSON.parse(localStorage.getItem(FAVORITE_KEY)),
  _ingredients: null ? [] : JSON.parse(localStorage.getItem(FAVORITE_KEY)),

  get cocktails() {
    return this._cocktails;
  },

  set cocktails(newCocktail) {
    const positionIndex = this._cocktails.indexOf(newCocktail);
    if (positionIndex > -1) {
      this._cocktails.splice(positionIndex, 1);
    } else {
      if (Array.isArray(newCocktail)) {
        this._cocktails = newCocktail;
      } else {
        this._cocktails.push(newCocktail);
      }
    }
    saveData(this._cocktails);
  },

  get ingredients() {
    return this._ingredients;
  },

  set ingredients(newIngredients) {
    const positionIndex = this._ingredients.indexOf(newIngredients);
    if (positionIndex > -1) {
      this._ingredients.splice(positionIndex, 1);
    } else {
      if (Array.isArray(newIngredients)) {
        this._ingredients = newIngredients;
      } else {
        this._ingredients.push(newIngredients);
      }
    }
    saveDataIngr(this._ingredients);
  },
};
