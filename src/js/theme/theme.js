const themeChange = document.querySelector('.checkbox__input');

const currentTheme = localStorage.getItem('theme');

if (currentTheme == 'dark') {
  themeChange.checked = true;
  document.body.classList.add('theme__dark');
} else {
  themeChange.checked = false;
  document.body.classList.remove('theme__dark');
}

themeChange.addEventListener('change', () => {
  document.body.classList.toggle('theme__dark');

  let theme = 'light';

  if (document.body.classList.contains('theme__dark')) {
    theme = 'dark';
  }

  localStorage.setItem('theme', theme);
});
