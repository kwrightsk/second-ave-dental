// ************************* Home Page Image Slideshow *************************

let slideIndex = 1;

// Next/previous controls
function moveSlides(n) {
  displaySlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  displaySlides(slideIndex = n);
}

// Display the slideshow to the page, where n is the index of the current slide to display
function displaySlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  // If move beyond last slide, show first slide
  if (n > slides.length) {slideIndex = 1}

  // If move before first slide, show last slide
  if (n < 1) {slideIndex = slides.length}

  // Initially hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Initially make all dot selectors not active (all styled the same)
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display active slide and style active dot selector
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

displaySlides(slideIndex);