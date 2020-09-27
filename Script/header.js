const hamburger = document.querySelector(".hamburger");
const hamImg = document.querySelector(".ham-img");

hamburger.addEventListener("click", function () {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("translate");
  if (hamImg.src == "./assets/icons/icon-close.svg") {
    hamImg.src = "./assets/icons/icon-hamburger.svg";
  } else if (hamImg.src == "./assets/icons/icon-hamburger.svg") {
    hamImg.src = "./assets/icons/icon-close.svg";
  }
});
