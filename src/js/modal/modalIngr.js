
import { modalIngrBuilder } from '../builders/modal-ingr';
import { getIngridient } from '../fetch/fetchIngridientByName';
export function createModalIngr(word) {
    getIngridient(word)
    .then(modalIngrBuilder)
    .catch(error => {
      console.log(error);
    });
    
}
