import { refs } from '../refs/selectorRefs';
import { createMarkupModalCocktail } from '../markups/createMarkupModal';
import { createMarkupIngredient } from '../markups/markupIngredient';
import { closeModal } from '../modal/close-modal';

export function modalBuilder(cocktail) {
  const markup = cocktail.drinks.map(createMarkupModalCocktail);
  refs.modal.innerHTML = markup;
  const ingredientList = document.querySelector('.modal__list');
  const markupIngredient = cocktail.drinks.map(createMarkupIngredient);
  ingredientList.innerHTML = markupIngredient.join();
  const btnClose = document.querySelector('[data-modal-close]');
  btnClose.addEventListener('click',closeModal)
}
