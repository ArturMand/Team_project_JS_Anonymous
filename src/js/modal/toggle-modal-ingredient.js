import { refs } from "../refs/selectorRefs";
export function toggleModalIngr() {
  refs.overlayIngr.classList.add('active');
  refs.modalIngr.classList.add('active');
    
}