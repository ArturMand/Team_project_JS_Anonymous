import { refs } from '../selectorRefs';

export function addHeroSearch(items) {
  const markup = items.map(item => 
    `<li class="hero__item">
      <button class="hero__btn" type="button" data-letter=${item}>${item}</button>`
  )
  refs.alphabet.insertAdjacentHTML('afterbegin', markup.join(''))
}
