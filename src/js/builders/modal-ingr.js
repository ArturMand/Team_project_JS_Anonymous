import { refs } from '../refs/selectorRefs';
import { createMarkupModalIngr } from '../markups/createMarkupModalIngr';
import { toggleOverlayIngr } from '../modal/overlay-ingredient';

export function modalIngrBuilder(ingredient) {
  console.log(ingredient);
  const markup = ingredient.ingredients.map(createMarkupModalIngr);
  refs.modalIngr.innerHTML = markup;
  const btnClose = document.querySelector('[data-modalIngr-close]');
  console.log('~ btnClose', btnClose)
  btnClose.addEventListener('click',toggleOverlayIngr)
}
