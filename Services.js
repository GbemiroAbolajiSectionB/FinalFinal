const rectangleElements = document.querySelectorAll('.rectangle');

window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
        rectangleElements.forEach(function(rectangle) {
            rectangle.style.margin = '10px 0'; // Adjust margin for smaller screens
        });
    } else {
        rectangleElements.forEach(function(rectangle) {
            rectangle.style.margin = '0 10px'; // Adjust margin for larger screens
        });
    }
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change slide every 2 seconds (2000 milliseconds)
}

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}
