function displaySocialFlex(i) {
  socials[i].style.display = "flex";
}

function displaySocialNone(i) {
  socials[i].style.display = "none";
}

var mql = window.matchMedia("(min-width: 765px)");

mediaqueryresponse(mql); // call listener function explicitly at run time

mql.addListener(mediaqueryresponse); // attach listener function to listen in on state changes

function mediaqueryresponse(mql) {
  const smalls = document.querySelectorAll(".small-screen");

  const profiles = document.querySelectorAll(".profile");
  if (mql.matches) {
    smalls.forEach((small) => {
      small.classList.add("social");
    });
    const socials = document.querySelectorAll(".social");
    for (let i = 0; i < profiles.length; i++) {
      profiles[i].addEventListener("mouseover", function () {
        socials[i].style.display = "flex";
      });
      profiles[i].addEventListener("mouseout", function () {
        socials[i].style.display = "none";
      });
    }
  } else {
    smalls.forEach((small) => {
      small.classList.remove("social");
    });
  }
}
