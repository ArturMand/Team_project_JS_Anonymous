import { refs } from '../refs/selectorRefs';
import { toggleOverlay } from './overlay';
import {createModal} from './modalCocktails'
import { closeModal } from './close-modal';



export function openModal(e) {
  e.preventDefault;
  if (!e.target.hasAttribute('data-modal-open')) return;
  createModal(e.target.name)

  refs.overlay.classList.add('active');
  refs.modal.classList.add('active');
  refs.unscroll.classList.add('active');
  refs.overlay.addEventListener('click', toggleOverlay);


}

