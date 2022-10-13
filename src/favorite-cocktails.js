// import { startPageBuild } from './js/builders/startPageBuild';
import { addHeroSearch } from './js/builders/heroAlphabet';
import { mobileMenu } from './js/mobile-menu/mobile-menu';
import { findCocktailBySearch } from './js/search/searchCocktail';
import { refs } from './js/refs/selectorRefs';
import { searchByABC } from './js/search/searchByABC';
import { openModal } from './js/modal/modal';
import { Navigation } from './js/nav-link/navigation';
import { pageFavCocktails } from './js/favorite-page/favCocktailsPage';
import { removeFav } from './js/favorite-page/removeFromFav';

mobileMenu();
pageFavCocktails();
removeFav();

refs.searchForm.addEventListener('submit', findCocktailBySearch);
refs.gallery.addEventListener('click', openModal);
