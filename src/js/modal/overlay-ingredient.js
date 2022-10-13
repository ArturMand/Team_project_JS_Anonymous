import { refs } from '../refs/selectorRefs';

export function toggleOverlayIngr(e) {
    console.log(e.target);
  if (e.target.hasAttribute('data-overlay-ingredient')) {
    refs.overlayIngr.classList.remove('active');
    refs.modalIngr.classList.remove('active');
    refs.overlay.classList.add('active');
    refs.modal.classList.add('active');
  }
  if (e.currentTarget.hasAttribute('data-modalIngr-close')) {
    refs.overlayIngr.classList.remove('active');
    refs.modalIngr.classList.remove('active');
    refs.overlay.classList.add('active');
    refs.modal.classList.add('active');
  }
}
