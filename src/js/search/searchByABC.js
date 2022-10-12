import { getCocktailsByLetter } from '../fetch/fetchCardByLetter';
import { cardBuilder } from '../builders/cardBuilder';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from '../refs/selectorRefs';
import { errorMarkup } from '../markups/errorMarkup';

export function searchByABC(e) {
  if (e.target.tagName !== 'BUTTON') return;
  const ourLetter = e.target.dataset.letter.toLowerCase();
  getCocktailsByLetter(ourLetter)
    .then(cardBuilder)
    .catch(error => {
      Notify.failure(`We haven't cocktail, which begin with that symbol`);
      refs.gallery.innerHTML = errorMarkup()
      console.log(error);
    });
}
