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
        <svg class="cocktails__svg" width="36" height="32">
        
            <path fill="#fd5103" style="fill:var(--color1, #fd5103)" d="m17.684 32-2.565-2.302C6.012 21.555 0 16.186 0 9.592 0 4.219 4.28 0 9.726 0c3.077 0 6.029 1.413 7.958 3.645A10.636 10.636 0 0 1 25.638 0h.003c5.447 0 9.726 4.221 9.726 9.592 0 6.592-6.013 11.963-15.119 20.125l-2.565 2.284z"/>
            <path d="m17.684 28.632-2.075-1.817C8.236 20.386 3.368 16.146 3.368 10.941c0-4.241 3.464-7.572 7.874-7.572 2.491 0 4.881 1.115 6.442 2.877a8.7 8.7 0 0 1 6.441-2.877h.002c4.409 0 7.874 3.331 7.874 7.572 0 5.204-4.867 9.443-12.241 15.887l-2.075 1.804z"/>
        </svg>
      </button>
    </div>
  </div>
</li>`;
}

