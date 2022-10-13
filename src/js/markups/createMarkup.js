export const btnIcon = document.querySelector('.btn__iconLove');
btnIcon.remove();

export function createMarkup({ strDrinkThumb, strDrink, idDrink }) {

  return `<li class="cocktails__item">
  <img class="cocktails__img" src="${strDrinkThumb}" alt="${strDrink}" />
  <div class="cocktails__box">
    <h3 class="cocktails__title--secondary cocktails__title--center">${strDrink}</h3>
    <div class="buttons">
      <button class="btn--orange cocktails__btn cocktails__btn--first" data-modal-open name="${idDrink}" type="button">
        Learn more
      </button>
      <button id="${idDrink}" class="btn--white cocktails__btn" data-favorite="btn" type="button">
        Add to ${btnIcon.outerHTML}
      </button>
    </div>
  </div>
</li>`;
}

