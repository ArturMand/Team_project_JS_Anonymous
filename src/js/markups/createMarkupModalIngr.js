export function createMarkupModalIngr({strIngredient, strDescription, strType, strAlcohol,idIngredient }) {
    return `<button class="modal__btn--close" type="button" data-modalIngr-close>
    <svg width="32" height="32">
    <path d="m17.254 16 7.369-7.369a.889.889 0 0 0-1.255-1.252l.001-.001L16 14.747 8.632 7.369A.893.893 0 1 0 7.369 8.63l.001.001 7.378 7.37-7.377 7.369a.89.89 0 1 0 1.253 1.254l.001-.001 7.376-7.369 7.37 7.37a.889.889 0 0 0 1.252-1.255l.001.001-7.37-7.37z"/>
    </svg>
  </button>
    <h2 class="modal__title">${strIngredient}</h2>
    <h3 class="about__title about__title--margin"> ${strType === null ? 'Sorry, not specified' : strType}</h3>
    <p class="modal__text">
      <b class="modal__text--bold">${strIngredient}</b> ${strDescription === null ? 'Sorry, not specified' : strDescription}
    </p>
    <ul class="list modal__list">
      <li class="modal__item">Type: ${strType === null ? 'Sorry, not specified' : strType}</li>
      <li class="modal__item">Country of origin: Sorry, not specified</li>
      <li class="modal__item">Alcohol by volume:  ${strAlcohol === null ? 'Sorry, not specified' : strAlcohol}</li>
      <li class="modal__item">Flavour: Sorry, not specified</li>
    </ul>
    <button class="modal__btn modal__btn--ingr btn--orange cocktails__btn" type="button" data-ingr-local name="${strIngredient}">
    Add to favorite
  </button>`
}