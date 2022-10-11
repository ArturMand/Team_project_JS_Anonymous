export function createMarkup({ strDrinkThumb, strDrink }) {
  return `<li class="cocktails__item">
  <img class="cocktails__img" src="${strDrinkThumb}" alt="${strDrink}" />
  <div class="cocktails__box">
    <h3 class="cocktails__title--secondary cocktails__title--center">${strDrink}</h3>
    <div class="buttons">
      <button class="btn--orange cocktails__btn cocktails__btn--first" data-modal-open>
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
</li>`;
}
