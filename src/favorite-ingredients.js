import { mobileMenu } from './js/mobile-menu/mobile-menu';
import { findCocktailBySearch } from './js/search/searchCocktail';
import { refs } from './js/refs/selectorRefs';
import { openModal } from './js/modal/modal';
import { pageFavIngredients } from './js/favorite-page/favIngredientPage';
import { removeFav } from './js/favorite-page/removeFromFavIngr';
import { saveCocktail } from './js/localStorage/getId';
import { modalControl } from './js/modal/modal-control';
import { modalIngrConrol } from './js/modal/modal-Ingr-conrol';

mobileMenu();
pageFavIngredients();
removeFav();

refs.searchForm.addEventListener('submit', findCocktailBySearch);
refs.gallery.addEventListener('click', openModal);
refs.gallery.addEventListener("click", saveCocktail);
refs.modal.addEventListener('click',modalControl)
refs.modalIngr.addEventListener('click',modalIngrConrol)