const navToggler = document.querySelector(".nav-toggler");
const navLinks = document.querySelectorAll(".header--menu>li>a");

navToggler.addEventListener("click", changeMenuState);

function changeMenuState() {
  const headerMenu = document.querySelector("ul.header--menu");
  const navIcon = document.querySelectorAll(".navIcon");

  // Show menu programatically
  headerMenu.classList.toggle("show");

  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
}

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

function setMenuActive() {
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((li) => {
      li.classList.remove("active");

      if (current == li.getAttribute("href").split("#")[1]) {
        li.classList.add("active");
      }
    });
  });
}

function onMenuClick() {
  console.log(navLinks);
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", changeMenuState);
  }
}

navbarFixed();
setMenuActive();
onMenuClick();
