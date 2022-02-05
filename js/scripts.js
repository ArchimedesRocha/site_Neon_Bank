//Modal Produtos Neon
const btnDropdownProdutos = document.querySelector(".js-btn-dropdown-produtos");
const dropdownProdutos = document.querySelector(".js-dropdown-produtos");
function openDropdownProdutos(event) {
  event.preventDefault();
  dropdownProdutos.classList.toggle("active");
}

btnDropdownProdutos.addEventListener("mouseenter", openDropdownProdutos);
dropdownProdutos.addEventListener("mouseleave", openDropdownProdutos);

//Menu Fixo
const header = document.getElementById("js-header");
function fixedMenu() {
  if (window.pageYOffset > 80) {
    header.classList.add("fixed-menu");
  } else {
    header.classList.remove("fixed-menu");
  }
}
document.addEventListener("scroll", fixedMenu);

//Menu Mobile
const btnMenu = document.getElementById("js-btn-menu-mobile");
const overlayMenu = document.querySelector(".js-overlay");
function openMenuMobile() {
  document.documentElement.classList.toggle("menu-opened");
}
btnMenu.addEventListener("click", openMenuMobile);
overlayMenu.addEventListener("click", openMenuMobile);
