import "./scss/style.scss";

const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const navSection = document.querySelector(".nav__content");
const navOverlay = document.querySelector(".nav__overlay");
const media = window.matchMedia("(width < 69.375em)");
const body = document.querySelector("body");

function openNavMenuHandler() {
  btnOpen.setAttribute("aria-expanded", "true");
  body.classList.add("noscroll");
  navSection.removeAttribute("inert");
}
function closeNavMenuHandler() {
  btnOpen.setAttribute("aria-expanded", "false");
  body.classList.remove("noscroll");
  navSection.setAttribute("inert", "");
}

function setNav(ev) {
  if (ev.matches) {
    console.log("is mobile");
    navSection.setAttribute("inert", "");

    setTimeout(() => {
      navSection.style.display = "block";
      navOverlay.style.display = "block";
    }, "500ms");
  } else {
    console.log("is desktop");
    navSection.removeAttribute("inert");
    navSection.style.display = "";
  }
}

btnOpen.addEventListener("click", openNavMenuHandler);

btnClose.addEventListener("click", closeNavMenuHandler);

setNav(media);

media.addEventListener("change", function (ev) {
  setNav(ev);
});
