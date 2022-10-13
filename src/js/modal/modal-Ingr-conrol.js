import { data } from "../localStorage/dataStorage";
import { refs } from "../refs/selectorRefs";
import { toggleOverlayIngr } from "./overlay-ingredient";
export function modalIngrConrol(e) {
    refs.overlayIngr.addEventListener('click',toggleOverlayIngr)
    if(e.target.hasAttribute('data-ingr-local')){
        e.target.textContent = data.ingredients.includes(e.target.name)
        ? `Add to favorite`
        : 'Remove from favorite';
        data.ingredients = e.target.name
    }
    
}