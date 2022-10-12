import { refs } from '../refs/selectorRefs';

export function addDatalistSearch(items) {
  const markup = items.map(item => 
    `<option class="hero__option" value="${item}">${item}</option>`
  )
  refs.qwerty.insertAdjacentHTML('afterbegin', markup.join(''))
}