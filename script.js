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
  