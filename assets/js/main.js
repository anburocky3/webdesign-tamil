const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", () => {
  const headerMenu = document.querySelector("ul.header--menu");
  const navIcon = document.querySelectorAll(".navIcon");

  // Show menu programatically
  headerMenu.classList.toggle("show");

  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});

function navbarFixed() {
  const header_dom = document.querySelector(".header");
  const nav_offset_top = header_dom.clientHeight + 50;

  window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset || document.documentElement.scrollTop;

    if (scroll >= nav_offset_top) {
      header_dom.classList.add("navbar-fixed");
    } else {
      header_dom.classList.remove("navbar-fixed");
    }
  });
}

navbarFixed();
