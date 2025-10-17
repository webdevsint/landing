let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("frame");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

function viewFrames() {
  document.querySelector(".content").style.display = "flex";
  document.querySelector("audio").play();
  document.querySelector(".content").scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
    fadeInOut();
  }, 800);
}

function fadeInOut() {
  // Fade In
  document.querySelector(".now-playing").style.opacity = 1;

  // Wait for 10 seconds
  setTimeout(() => {
    // Fade Out
    document.querySelector(".now-playing").style.opacity = 0;
  }, 8000); // 10000 milliseconds = 10 seconds
}

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("fade-out");
  preloader.addEventListener("transitionend", function () {
    preloader.classList.add("hidden");
  });
});
