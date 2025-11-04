const header = document.getElementById('header');
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

// Cambiar fondo del header al hacer scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

// Menú responsive
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('activo');
  menuToggle.classList.toggle('activo');
});