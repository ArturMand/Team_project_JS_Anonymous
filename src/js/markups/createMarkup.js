export function createMarkup({ strDrinkThumb, strDrink, idDrink }) {
  return `<li class="cocktails__item">
  <img class="cocktails__img" src="${strDrinkThumb}" alt="${strDrink}" />
  <div class="cocktails__box">
    <h3 class="cocktails__title--secondary cocktails__title--center">${strDrink}</h3>
    <div class="buttons">
      <button class="btn--orange cocktails__btn cocktails__btn--first" data-modal-open type="button">
        Learn more
      </button>
      <button id="${idDrink}" class="btn--white cocktails__btn" data-favorite="btn" type="button">
        Add to
        <svg class="cocktails__svg" width="22" height="19">
          <use href="./image/sprite.svg#icon-heart"></use>
        </svg>
      </button>
    </div>
  </div>
</li>`;
}

