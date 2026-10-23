import "./scss/style.scss";

// const btnOpen = document.getElementById("btnOpen");
// const btnClose = document.getElementById("btnClose");

const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const navSection = document.querySelector(".nav__content");
const media = window.matchMedia("(width < 69.375em)");

btnOpen.addEventListener("click", (ev) => {
  ev.target.parentElement.setAttribute("aria-expanded", "true");
});

btnClose.addEventListener("click", () => {
  console.log("closed");
});

function setNav(ev) {
  console.log(navSection);

  if (ev.matches) {
    console.log("is mobile");

    setTimeout(() => {
      navSection.style.display = "block";
    }, "500ms");
  } else {
    console.log("is desktop");
    navSection.style.display = "";
  }
}

setNav(media);

media.addEventListener("change", function (ev) {
  setNav(ev);
});
