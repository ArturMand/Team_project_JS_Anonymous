import { getCocktailsByLetter } from '../fetch/fetchCardByLetter';
import { cardBuilder } from '../builders/cardBuilder';


export function searchByABC(e) {
  if (e.target.tagName !== 'BUTTON') return;
  const ourLetter = e.target.dataset.letter.toLowerCase();
  getCocktailsByLetter(ourLetter)
    .then(cardBuilder)
    .catch(error => {
      console.log(error);
    });
}
