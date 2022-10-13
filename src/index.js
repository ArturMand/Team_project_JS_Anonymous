import { startPageBuild } from './js/builders/startPageBuild';
import { addHeroSearch } from './js/builders/heroAlphabet';
import { mobileMenu } from './js/mobile-menu/mobile-menu';
import { findCocktailBySearch } from './js/search/searchCocktail';
import { refs } from './js/refs/selectorRefs';
import { searchByABC } from './js/search/searchByABC';
import { openModal } from './js/modal/modal';
import { dataList } from './js/hero-datalist/datalist';
import { saveCocktail } from './js/localStorage/getId';
import { letters } from './js/refs/letterABC';
import { addDatalistSearch } from './js/builders/heroDatalist';
import { searchByDatalist } from './js/search/searchByDatalist';
import { modalControl } from './js/modal/modal-control';
import { modalIngrConrol } from './js/modal/modal-Ingr-conrol';

mobileMenu();
startPageBuild();
addHeroSearch(letters);
addDatalistSearch(letters);
dataList();

refs.searchForm.addEventListener('submit', findCocktailBySearch);
refs.list.addEventListener('click', searchByABC);
refs.qwerty.addEventListener('click', searchByDatalist);
refs.gallery.addEventListener('click', openModal);
refs.gallery.addEventListener('click', saveCocktail);
refs.modal.addEventListener('click', modalControl);
refs.modalIngr.addEventListener('click', modalIngrConrol);
