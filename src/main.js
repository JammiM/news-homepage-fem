import "./scss/style.scss";

const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const navSection = document.querySelector(".nav__content");
const navOverlay = document.querySelector(".nav__overlay");
const media = window.matchMedia("(width < 69.375em)");

function OpenNavMenuHandler(ev) {
  ev.target.parentElement.setAttribute("aria-expanded", "true");
}
function CloseNavMenuHandler(ev) {
  ev.target.parentElement.setAttribute("aria-expanded", "false");
}

function setNav(ev) {
  if (ev.matches) {
    console.log("is mobile");

    setTimeout(() => {
      navSection.style.display = "block";
      navOverlay.style.display = "block";
    }, "500ms");
  } else {
    console.log("is desktop");
    navSection.style.display = "";
  }
}

btnOpen.addEventListener("click", OpenNavMenuHandler);

btnClose.addEventListener("click", CloseNavMenuHandler);

setNav(media);

media.addEventListener("change", function (ev) {
  setNav(ev);
});
