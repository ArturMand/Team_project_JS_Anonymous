const navBtn = document.querySelector('.header__button');
const navList = document.querySelector('.header__list');

navBtn.addEventListener('click', () => {
  
  if (navList.style.display === 'none') {
    navList.style.display = 'block';
  } else {
    navList.style.display = 'none';
  }
});
