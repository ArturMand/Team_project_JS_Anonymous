import { refs } from './selectorRefs';

export function openModal(e) {
  e.preventDefault;

  if (!e.target.hasAttribute('data-add')) return;

  refs.overlay.classList.toggle('avtive');
}
