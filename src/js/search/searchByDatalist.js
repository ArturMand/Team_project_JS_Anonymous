import { getCocktailsByLetter } from '../fetch/fetchCardByLetter';
import { cardBuilder } from '../builders/cardBuilder';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from '../refs/selectorRefs';
import { errorMarkup } from '../markups/errorMarkup';

export function searchByDatalist(e) {
    console.log(e.target.tagName);
  if (e.target.tagName !== 'OPTION') return;
  const ourLetter = e.target.value.toLowerCase();
  getCocktailsByLetter(ourLetter)
    .then(cardBuilder)
    .catch(error => {
      Notify.failure(`We haven't cocktail, which begin with that symbol`);
      refs.gallery.innerHTML = errorMarkup()
      console.log(error);
    });
}