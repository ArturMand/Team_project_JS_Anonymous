import { getCocktailsByLetter } from '../fetch/fetchCardByLetter';
import { cardBuilder } from '../builders/cardBuilder';


export function searchByDatalist(e) {
    console.log(e.target.tagName);
  if (e.target.tagName !== 'OPTION') return;
  const ourLetter = e.target.value.toLowerCase();
  getCocktailsByLetter(ourLetter)
    .then(cardBuilder)
    .catch(error => {
      console.log(error);
    });
}