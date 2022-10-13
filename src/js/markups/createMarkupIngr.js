export function createMarkupIngr({strIngredient, strType}) {
    return `<li class="cocktails__item">
          <div class="favorite__box">
            <h3 class="cocktails__title--secondary favorite__title--secondary">
              ${strIngredient}
            </h3>
            <p class="favorite__text">${strType}</p>
            <div class="buttons">
              <button class="btn--orange cocktails__btn cocktails__btn--first" type="button" data-modal-open>
                Learn more
              </button>
              <button name="${strIngredient}" class="btn--white cocktails__btn" type="button" data-ingredient="btn">
                Add to
                <svg class="cocktails__svg" width="22" height="19">
                  <use href="./image/sprite.svg#icon-heart"></use>
                </svg>
              </button>
            </div>
          </div>
        </li>`
};