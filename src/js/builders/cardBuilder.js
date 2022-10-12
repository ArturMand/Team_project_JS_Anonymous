import { refs } from '../refs/selectorRefs';
import { createMarkup } from '../markups/createMarkup';

export function cardBuilder(cocktail) {
  const markup = cocktail.drinks.map(createMarkup);
  refs.gallery.innerHTML = markup.join('');
}

