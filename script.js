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

/*Project Animation*/

  const projectCards = document.querySelectorAll('.project-card');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScrollAnimation() {
    projectCards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add('appear');
      } else {
        card.classList.remove('appear');
      }
    });
  }

  // Call the function on initial load and on scroll
  handleScrollAnimation();
  window.addEventListener('scroll', handleScrollAnimation);

/*SERVICES*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

function drawMarbleTexture() {
  for (let i = 0; i < 1000; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const radius = Math.random() * 20 + 5;
    const intensity = Math.random() * 60 + 40;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${intensity / 100})`;
    ctx.fill();
  }
}

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, width, height);

drawMarbleTexture();

//services animation 
const serviceCards = document.querySelectorAll('.service-card');
const servicesSection = document.querySelector('.services');
let lastScrollY = window.scrollY;

function animateServiceCards() {
  serviceCards.forEach((card, index) => {
    card.style.animation = `spawn-in 0.5s ease-in-out forwards ${index * 0.1}s`;
  });
}

function vanishServiceCards() {
  serviceCards.forEach((card, index) => {
    card.style.animation = `vanish-out 0.3s ease-in-out forwards ${index * 0.1}s`;
  });
}

function scrollDirection() {
  const scrollY = window.scrollY;
  const servicesSectionTop = servicesSection.getBoundingClientRect().top;

  if (scrollY > lastScrollY) {
    // Scrolling down, animate service cards in
    animateServiceCards();
  } else {
    // Scrolling up, check if the user scrolled above the services section
    if (scrollY <= servicesSectionTop) {
      // Animate service cards out only if the user scrolled above the services section
      vanishServiceCards();
    }
  }

  lastScrollY = scrollY;
}

window.onload = animateServiceCards;
window.addEventListener('scroll', scrollDirection);


