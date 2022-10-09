const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
const gallery = document.querySelector('.hero__list');
function addHeroSearch(items) {
  return  items.map( item => `<li class="hero__item">
      <button class="hero__btn">${item}</button>
    </li>`)
    .join('')
}
gallery.insertAdjacentHTML('afterbegin', addHeroSearch(letters))
  
// addEventListener('click', fetchCocktails)

