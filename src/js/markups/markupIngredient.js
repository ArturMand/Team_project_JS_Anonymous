export function createMarkupIngredient(data) {
    const ingredients = [];

    for (let i = 1; i <= 15; i += 1) {
      let ingredient = data['strIngredient' + i];
      if (!ingredient) break;
      ingredients.push(ingredient);
    }
    return ingredients
      .map(ingredient => {
        return  `<li class='list'><button name="${ingredient}" data-modal-ingredient type='button'>${ingredient}</button></li>`;
      })
      .join('');
}
