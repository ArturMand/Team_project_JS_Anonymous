import { refs } from '../refs/selectorRefs';
import { closeModal } from './close-modal';
import { toggleOverlay } from './overlay';

export function openModal(e) {
  e.preventDefault;
  if (!e.target.hasAttribute('data-modal-open')) return;
  refs.overlay.classList.add('active');
  refs.modal.classList.add('active');
  refs.unscroll.classList.add('active');
  refs.overlay.addEventListener('click', toggleOverlay);
  refs.btnCloseModal.addEventListener('click', closeModal);
}
