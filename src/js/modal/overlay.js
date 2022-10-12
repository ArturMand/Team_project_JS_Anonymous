import { refs } from '../refs/selectorRefs';

export function toggleOverlay(e) {
  if (e.target.hasAttribute('data-overlay')) {
    refs.unscroll.classList.remove('active');
    refs.overlay.classList.remove('active');
    refs.modal.classList.remove('active');
    refs.overlay.removeEventListener('click', toggleOverlay);
  }
}
