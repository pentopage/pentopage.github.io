const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });
}

document.querySelectorAll('#year').forEach((node) => {
  node.textContent = new Date().getFullYear();
});
