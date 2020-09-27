const slideButtons = document.querySelectorAll(".slide-button");
const imgSlider = document.querySelector(".img-slider");

const titleSlider = document.querySelector(".title-slider");

const sliderParagraph = document.querySelector(".slider-content p");

let currentSlide = 0;

let slideContent = [
  {
    title: "Project Paramour",
    paragraph:
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    image: "./assets/home/desktop/image-hero-paramour.jpg",
  },
  {
    title: "Seraph Station",
    paragraph:
      "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    image: "./assets/home/desktop/image-hero-seraph.jpg",
  },
  {
    title: "Federal II Tower",
    paragraph:
      "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    image: "./assets/home/desktop/image-hero-federal.jpg",
  },
  {
    title: "Trinity Bank Tower",
    paragraph:
      "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    image: "./assets/home/desktop/image-hero-trinity.jpg",
  },
];

function main(index) {
  titleSlider.textContent = slideContent[index].title;
  sliderParagraph.textContent = slideContent[index].paragraph;
  imgSlider.style.background =
    "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45))" +
    "," +
    `url(${slideContent[index].image})`;
  imgSlider.style.backgroundRepeat = "no-repeat";
  imgSlider.style.backgroundSize = "cover";
}

function removeActiveButtonStyle(nbr) {
  const actives = document.querySelector(".active");
  actives.classList.remove("active");
  slideButtons[nbr].classList.add("active");
}

slideButtons[0].addEventListener("click", () => {
  main(0);
  removeActiveButtonStyle(0);
});

slideButtons[1].addEventListener("click", () => {
  main(1);
  removeActiveButtonStyle(1);
});

slideButtons[2].addEventListener("click", () => {
  main(2);
  removeActiveButtonStyle(2);
});

slideButtons[3].addEventListener("click", () => {
  main(3);
  removeActiveButtonStyle(3);
});
