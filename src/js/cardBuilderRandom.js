import { refs } from './selectorRefs';
import { createMarkup } from './createMarkup';


export function randomCardBuilder(cocktail) {
  for (const e of cocktail) {
    const markup = e.drinks.map(createMarkup);
    refs.gallery.insertAdjacentHTML('afterbegin', markup.join(''));
  }
}