const content = document.querySelector(".content");
const main = document.querySelector("main");
const sunMoon = document.querySelector("#sunMoon");
const imgRotate = document.querySelector(".imgRotate");
let isSunToggle = true;

sunMoon.addEventListener("click", () => {
  if (isSunToggle === true) {
    sunMoon.src = "img/night-mode.png";
    main.style.backgroundColor = "white";
    content.style.color = "black";
    imgRotate.src = "img/Gris_Logo.png";
    isSunToggle = false;
  } else {
    sunMoon.src = "img/LightMode.png";
    main.style.backgroundColor = "rgb(31, 31, 31)";
    content.style.color = "white";
    imgRotate.src = "img/image.png";
    isSunToggle = true;
  }
});

const flex = document.querySelector(".flex");
const flexbox = document.querySelectorAll(".flexbox");
const acutalDirection = document.querySelector(".actualDirection");
const acutalJustify = document.querySelector(".actualContent");

// Justify content

document.querySelector(".flexStart").addEventListener("click", () => {
  flex.style.justifyContent = "flex-start";
  acutalJustify.innerHTML =
    "justify content: <span class='color'>flex start</span>";
});

document.querySelector(".flexEnd").addEventListener("click", () => {
  flex.style.justifyContent = "flex-end";
  acutalJustify.innerHTML =
    "justify content: <span class='color'>flex end</span>";
});

document.querySelector(".flexCenter").addEventListener("click", () => {
  flex.style.justifyContent = "center";
  acutalJustify.innerHTML =
    "justify content: <span class='color'>center</span>";
});

document.querySelector(".flexBetween").addEventListener("click", () => {
  flex.style.justifyContent = "space-between";
  acutalJustify.innerHTML =
    "justify content: <span class='color'>space between</span>";
});

document.querySelector(".flexEvenly").addEventListener("click", () => {
  flex.style.justifyContent = "space-evenly";
  acutalJustify.innerHTML =
    "justify content: <span class='color'>space evenly</span>";
});

// direction

document.querySelector(".row").addEventListener("click", () => {
  flex.style.flexDirection = "row";
  flex.style.height = "auto";
  flex.style.width = "100vw";
  flexbox[0].style.width = "25%";
  flexbox[1].style.width = "25%";
  flexbox[2].style.width = "25%";
  acutalDirection.innerHTML = `direction: <span class='color'>row</span>`;
});

document.querySelector(".reverseRow").addEventListener("click", () => {
  flex.style.flexDirection = "row-reverse";
  flex.style.height = "auto";
  flex.style.width = "100vw";
  flexbox[0].style.width = "25%";
  flexbox[1].style.width = "25%";
  flexbox[2].style.width = "25%";
  acutalDirection.innerHTML = `direction: <span class='color'>reverse row</span>`;
});

document.querySelector(".column").addEventListener("click", () => {
  flex.style.flexDirection = "column";
  flex.style.height = "200vh";
  flex.style.width = "50vw";
  flexbox[0].style.width = "100%";
  flexbox[1].style.width = "100%";
  flexbox[2].style.width = "100%";
  acutalDirection.innerHTML = `direction: <span class='color'>column</span>`;
});

document.querySelector(".reverseColumn").addEventListener("click", () => {
  flex.style.flexDirection = "column-reverse";
  flex.style.height = "200vh";
  flex.style.width = "50vw";
  flexbox[0].style.width = "100%";
  flexbox[1].style.width = "100%";
  flexbox[2].style.width = "100%";
  acutalDirection.innerHTML = `direction: <span class='color'>reverse column</span>`;
});
