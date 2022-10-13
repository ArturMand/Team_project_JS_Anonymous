import { getInfo } from '../fetch/fetchCocktailInformation';
import {modalBuilder} from '../builders/modalBuilder'
export function createModal(word) {
    getInfo(word)
    .then(modalBuilder)
    .catch(error => {
      console.log(error);
    });
    
}
