var menuMobile = document.getElementById("header");

var opened = false;

var openMenu = document.getElementById("button-open");
var closeMenu = document.getElementById("button-close");

window.addEventListener('resize', function () {
  var w = window.outerWidth;
  if (w > 800 && openMenu) {
    menuMobile.classList.remove("is-open");
  }
});

openMenu.addEventListener("click", function() {
  opened = true;
  menuMobile.classList.add("is-open");
});

closeMenu.addEventListener("click", function() {
  opened = false;
  menuMobile.classList.remove("is-open");
});
