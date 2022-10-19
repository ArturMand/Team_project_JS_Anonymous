import { mobileMenu } from './js/mobile-menu/mobile-menu';
import { findCocktailBySearch } from './js/search/searchCocktail';
import { refs } from './js/refs/selectorRefs';
import { openModal } from './js/modal/modal';
import { pageFavCocktails } from './js/favorite-page/favCocktailsPage';
import { removeFav } from './js/favorite-page/removeFromFav';
import { Theme } from "./js/theme/theme";
import { saveCocktail } from './js/localStorage/getId';
import { modalControl } from './js/modal/modal-control';
import { modalIngrConrol } from './js/modal/modal-Ingr-conrol';
import { Navigation } from './js/nav-link/navigation';
mobileMenu();
pageFavCocktails();
removeFav();

refs.searchForm.addEventListener('submit', findCocktailBySearch);
refs.gallery.addEventListener('click', openModal);
refs.gallery.addEventListener("click", saveCocktail);
refs.modal.addEventListener('click',modalControl)
refs.modalIngr.addEventListener('click',modalIngrConrol)