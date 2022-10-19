import { refs } from "../refs/selectorRefs";
import { INGREDIENTS_KEY } from '../localStorage/dataStorage';
import { getIngridient } from '../fetch/fetchIngridientByName';
import { createMarkupIngr } from '../markups/createMarkupIngr';
import { btnIcon } from '../markups/createMarkup';
import { errorMarkup } from "../markups/errorMarkup";
export async function pageFavIngredients() {
    const parsedArray = JSON.parse(localStorage.getItem(INGREDIENTS_KEY));
    if(parsedArray === null) {
      errorMarkup()
      return
    }
    if (parsedArray.length === 0) {
      refs.textFavPageIngr.textContent = 'No ingredients added yet!';
      return;
    };

    const array = parsedArray.map(ingrName => {
      return getIngridient(ingrName);
    });

    const res = await Promise.all(array);

    for (let ingredient of res) {
        const markup = ingredient.ingredients.map(createMarkupIngr);
        refs.listFavIngr.insertAdjacentHTML("beforeend", markup);
  };

  const arrBtnAddTo = document.querySelectorAll('button[data-ingredient]');
  arrBtnAddTo.forEach(element => {
        element.innerHTML = `Remove ${btnIcon.outerHTML}`;
  });
};