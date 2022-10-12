import { getCocktailsByLetter } from '../render/renderCardByLetter';
import { cardBuilder } from '../builders/cardBuilder';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function searchByABC(e) {
  if (e.target.tagName !== 'BUTTON') return;
  const ourLetter = e.target.dataset.letter.toLowerCase();
  console.log(ourLetter);
  getCocktailsByLetter(ourLetter)
    .then(cardBuilder)
    .catch(error => {
      Notify.failure(`We hav't cocktail, which begin with that letter`);
      console.log(error);
    });
}
