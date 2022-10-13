import { closeModal } from './close-modal';
import { data } from '../localStorage/dataStorage';

export function modalControl(e) {
  if (e.target.hasAttribute('data-modal-close')) {
    closeModal();
  }

  if (e.target.hasAttribute('data-cock-local')) {
    e.target.textContent = data.cocktails.includes(e.target.name)
      ? 'Add to favorite'
      : 'Remove from favorite';
    data.cocktails = e.target.name;
  }

  if(e.target.hasAttribute('data-modal-ingredient')){
    data.ingredients = e.target.name;
  }
}
