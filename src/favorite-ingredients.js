import { addHeroSearch } from './js/builders/heroAlphabet';
import { mobileMenu } from './js/mobile-menu/mobile-menu';
import { findCocktailBySearch } from './js/search/searchCocktail';
import { refs } from './js/refs/selectorRefs';
import { searchByABC } from './js/search/searchByABC';
import { openModal } from './js/modal/modal';
import { Navigation } from './js/nav-link/navigation';
import { pageFavIngredients } from './js/favorite-page/favIngredientPage';
import { removeFav } from './js/favorite-page/removeFromFavIngr';

mobileMenu();
pageFavIngredients();
removeFav();

refs.searchForm.addEventListener('submit', findCocktailBySearch);
refs.gallery.addEventListener('click', openModal);