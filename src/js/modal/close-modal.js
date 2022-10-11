import { refs } from '../selectorRefs';
import { toggleOverlay } from './overlay';

export function closeModal(e) {
  if (e.currentTarget.tagName === 'BUTTON') {
    refs.unscroll.classList.remove('active');
    refs.overlay.classList.remove('active');
    refs.modal.classList.remove('active');
    refs.overlay.removeEventListener('click', toggleOverlay);
    refs.modal.removeEventListener('click', closeModal);
  }
}
