import { getCocktailsByLetter } from './cocktailsAPI';
import { cardBuilder } from './cocktailCard';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function searchByABC(e) {
  if (e.target.tagName !== 'BUTTON') return;
  const ourLetter = e.target.dataset.letter.toLowerCase();
  console.log(ourLetter);
  getCocktailsByLetter(ourLetter)
    .then(cardBuilder)
    .catch(error => {
      Notify.failure(`you must die!`);
      console.log(error);
    });
}
