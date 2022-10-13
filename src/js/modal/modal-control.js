import { closeModal } from './close-modal';
import { data } from '../localStorage/dataStorage';

export function modalControl(e) {
  console.log(e.target);
  if (e.target.hasAttribute('data-modal-close')) {
    closeModal();
  }

  if (e.target.hasAttribute('data-cock-local')) {
    console.log(e.target.textContent);
    e.target.textContent = data.cocktails.includes(e.target.name)
      ? 'Add to favorite'
      : 'Remove from favorite';

    data.cocktails = e.target.name;
  }
}
