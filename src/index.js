import { startPageBuild } from './js/builders/startPageBuild';
import { addHeroSearch } from './js/builders/heroAlphabet';
import { mobileMenu } from './js/mobile-menu';
import { findCocktailBySearch } from './js/search/searchCocktail';
import { refs } from './js/refs/selectorRefs';
import { searchByABC } from './js/search/searchByABC';
import { openModal } from './js/modal/modal';
import { letters } from './js/refs/letterABC'

mobileMenu();
startPageBuild()
addHeroSearch(letters);

refs.searchForm.addEventListener('submit', findCocktailBySearch);
refs.list.addEventListener('click', searchByABC);
refs.gallery.addEventListener('click', openModal);
