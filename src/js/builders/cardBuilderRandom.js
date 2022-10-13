import { refs } from '../refs/selectorRefs';
import { createMarkup } from '../markups/createMarkup';


export function randomCardBuilder(cocktail) {
          refs.cockTitle.classList.remove('js_hidden_picture')
  for (const e of cocktail) {
    const markup = e.drinks.map(createMarkup);
    refs.gallery.insertAdjacentHTML('afterbegin', markup.join(''));
  }
}