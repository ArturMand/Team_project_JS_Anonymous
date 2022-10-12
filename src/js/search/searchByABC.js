import { getCocktailsByLetter } from '../fetch/fetchCardByLetter';
import { cardBuilder } from '../builders/cardBuilder';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from '../selectorRefs';
import { errorMarkup } from '../createMarkup';

export function searchByABC(e) {
  if (e.target.tagName !== 'BUTTON') return;
  const ourLetter = e.target.dataset.letter.toLowerCase();
  console.log(ourLetter);
  getCocktailsByLetter(ourLetter)
    .then(cardBuilder)
    .catch(error => {
      Notify.failure(`We haven't cocktail, which begin with that symbol`);
      refs.gallery.innerHTML = errorMarkup()
      console.log(error);
    });
}
