// Fade Navbar on Scroll
$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $('.navbar').addClass('low-opacity');
  } else {
    $('.navbar').removeClass('low-opacity');
  }
});

// Close Navbar Toggle on Click and Scroll to Section
$('.navbar-nav .nav-link').on('click', function() {
  $('.navbar-collapse').collapse('hide');

  var target = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 500);

  // Add 'active' class to the clicked nav item
  $('.navbar-nav .nav-link').removeClass('active');
  $(this).addClass('active');
});


// Image Carousel Auto Slide
$('.carousel').carousel({
  interval: 3000,
  pause: false
});

//SERVICES
document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".service-card");
  const isInViewport = function (element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  const addMagicClass = function () {
    serviceCards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add("magic");
      }
    });
  };
  addMagicClass();
  window.addEventListener("scroll", addMagicClass);
});

// Initialize Google Map
function initMap() {
      var mapOptions = {
        center: { lat: 37.7749, lng: -122.4194 }, // Set the center of the map
        zoom: 8 // Set the zoom level
      };
      var map = new google.maps.Map(document.getElementById('map'), mapOptions);

      var marker = new google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 }, // Set the position of the marker
        map: map,
        title: 'San Francisco' // Set a title for the marker (optional)
      });
    }
