import { refs } from '../refs/selectorRefs';
import { createMarkup } from '../markups/createMarkup';
import { errorMarkup } from '../markups/errorMarkup';
import { Notify } from 'notiflix';

export function cardBuilder(cocktail) {
  console.log(cocktail.drinks);
  if (cocktail.drinks === null) {
    Notify.failure(`We haven't cocktail, which begin with that symbol`);
    refs.gallery.innerHTML = errorMarkup()
    return
  } else {
    const markup = cocktail.drinks.map(createMarkup);
    refs.gallery.innerHTML = markup.join('');
  }
}

