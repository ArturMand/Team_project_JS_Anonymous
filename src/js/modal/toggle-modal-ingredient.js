import { refs } from "../refs/selectorRefs";
import { toggleOverlayIngr } from "./overlay-ingredient";
export function toggleModalIngr() {
  refs.overlayIngr.classList.add('active');
  refs.modalIngr.classList.add('active');
}