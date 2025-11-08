const btnMobile = document.querySelector('#checkbox');
const listMobile = document.querySelector('#listMobile');

btnMobile.addEventListener('click', () => {
  listMobile.classList.toggle('translate-x-full');
  listMobile.classList.toggle('opacity-0');
});
