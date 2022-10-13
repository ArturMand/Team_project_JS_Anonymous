import { closeModal } from './close-modal';
import { data } from '../localStorage/dataStorage';
import { toggleModalIngr } from './toggle-modal-ingredient';
import { refs } from '../refs/selectorRefs';
import { createModalIngr } from './modalIngr';
export function modalControl(e) {
  // if (e.target.hasAttribute('data-modal-close')) {
  //   closeModal();
  // }

  if (e.target.hasAttribute('data-cock-local')) {
    e.target.textContent = data.cocktails.includes(e.target.name)
      ? `Add to favorite`
      : 'Remove from favorite';
    data.cocktails = e.target.name;
  }

  if(e.target.hasAttribute('data-modal-ingredient')){
    createModalIngr(e.target.name)
    toggleModalIngr(e)
    refs.overlay.classList.remove('active');
    refs.modal.classList.remove('active');
  }
 
}
