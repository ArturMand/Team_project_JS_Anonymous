import { refs } from "../refs/selectorRefs";
import { FAVORITE_KEY } from '../localStorage/dataStorage';
import { getInfo } from '../fetch/fetchCocktailInformation';
import { createMarkup } from '../markups/createMarkup';
// import { data } from '../js/localStorage/dataStorage';

export async function pageFavCocktails() {
    const parsedArray = JSON.parse(localStorage.getItem(FAVORITE_KEY));
    if (parsedArray.length === 0) {
      refs.textFavPageCockt.textContent = 'No cocktails added yet!';
      return;
    };

    const array = parsedArray.map(id => {
      return getInfo(id);
    });

    const res = await Promise.all(array);
  console.log(res);
  
    for (const cocktail of res) {
        const markup = cocktail.drinks.map(createMarkup);
        refs.listFavCock.insertAdjacentHTML("beforeend", markup);
  };

  const arrBtnAddTo = document.querySelectorAll('button[data-favorite="btn"]');
  arrBtnAddTo.forEach(element => {
        element.textContent = 'Remove';
  });
};