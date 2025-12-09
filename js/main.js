
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 0, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

var typed = new Typed(".headersecondline", {
  strings:["Hello, Abdullah Ameen is a Geospatial and Civil Engineer <br> with over 20 Years of Experience in Program/Project Management, Geospatial data Analysis, Research and Education. <br> <br> Scroll down to know more about me..."],
  typeSpeed: 40,
  backSpeed:10,
  loop: true,

})
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  fetch(event.target.action, {
      method: 'POST',
      body: new FormData(event.target),
      headers: { 'Accept': 'application/json' }
  }).then(response => {
      if (response.ok) {
          document.getElementById('confirmationMessage').innerText = "Thank you for your message!";
          document.getElementById('contactForm').reset();
      } else {
          document.getElementById('confirmationMessage').innerText = "Oops! Something went wrong. Please try again.";
      }
  }).catch(error => {
      document.getElementById('confirmationMessage').innerText = "Oops! There was a problem.";
  });
});


