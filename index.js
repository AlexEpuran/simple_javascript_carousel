const slides = document.getElementsByClassName('carousel-item');
slidePosition = 0;
totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener("click", moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener("click", moveToPrevSlide);

function hideAllSlides() {
  for (currentSlide of slides) {
    currentSlide.classList.remove("carousel-item-visible");
    currentSlide.classList.add("carousel-item-hidden");
  }
}

function moveToNextSlide() {
  hideAllSlides();
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
  hideAllSlides();
  if (slidePosition === 0) {
    slidePosition = totalSlides -1;
  } else {
    slidePosition--;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}

//DONE