const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");
const toggle = () => {
  [menu, closeMenu].forEach((element) => element.classList.toggle("hidden"));
};
menu.addEventListener("click", toggle);
closeMenu.addEventListener("click", toggle);
