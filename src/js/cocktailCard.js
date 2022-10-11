import { refs } from './selectorsRefs';


// fetchCocktails('2')
//     .then(cardBuilder)
//     .catch(error => {console.log(error);});

export function cardBuilder(cocktail) {
    // console.log(cocktail);
    const markup = cocktail.drinks.map(
        ({ strDrinkThumb, strDrink }) =>
        `<li class="cocktails__item">
        <img class="cocktails__img" src="${strDrinkThumb}" alt="${strDrink}" />
        <div class="cocktails__box">
          <h3 class="cocktails__title--secondary cocktails__title--center">${strDrink}</h3>
          <div class="buttons">
            <button class="btn--orange cocktails__btn cocktails__btn--first">
              Learn more
            </button>
            <button class="btn--white cocktails__btn">
              Add to
              <svg class="cocktails__svg" width=22 height=19>
                <use href="./image/sprite.svg#icon-heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>`
        
    );
  refs.gallery.innerHTML = markup.join('')
}


  
// getRandomCocktail()
//     .then(randomCardBuilder)
//     .catch(error => { console.log(error); })
    

export function randomCardBuilder(cocktail) {
    // console.log(cocktail);
    for (const e of cocktail) {
        const markup = e.drinks.map(
        ({ strDrinkThumb, strDrink }) =>
            `<li class="cocktails__item">
        <img class="cocktails__img" src="${strDrinkThumb}" alt="${strDrink}" />
        <div class="cocktails__box">
          <h3 class="cocktails__title--secondary cocktails__title--center">${strDrink}</h3>
          <div class="buttons">
            <button class="btn--orange cocktails__btn cocktails__btn--first">
              Learn more
            </button>
            <button class="btn--white cocktails__btn">
              Add to
              <svg class="cocktails__svg" width="22" height="19">
                <use href="./image/sprite.svg#icon-heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>`
        );
    refs.gallery.insertAdjacentHTML('afterbegin', markup.join(''))
    }

}