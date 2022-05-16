
const target = document.getElementById("menu");
target.addEventListener('click', () => {
target.classList.toggle('open');
  const nav = document.getElementById("d-nav");
nav.classList.toggle('in');
});