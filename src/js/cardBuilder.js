import { refs } from './selectorRefs';
import { createMarkup } from './createMarkup';

export function cardBuilder(cocktail) {
  const markup = cocktail.drinks.map(createMarkup);
  refs.gallery.innerHTML = markup.join('');
}

