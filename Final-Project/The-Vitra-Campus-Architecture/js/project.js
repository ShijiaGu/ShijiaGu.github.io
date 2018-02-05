$(document).ready (function(){

// fixed header effect

  window.onscroll = function() {myFunction()};

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

// change logo color on scroll

  $(document).scroll(function() {
    var scrollPos = $(document).scrollTop();
    if (scrollPos >= 2134) {   
      $('.logo-color').css("fill","#000000");
    } else {
      $('.logo-color').css("fill","#ffffff");
    }
  });
  
// mouse hover effect

  var svg = SVG.get('#svg-map');

  $('.project-list li').mouseover(function(evt) {
    $(this).css({'color': '#fff'});
    var id = $(this).attr('data-id');
    $('#' + id + ' circle').css({fill: '#000'});
  });

  $('.project-list li').mouseout(function(evt) {
    $(this).css({'color': '#939598'});
    var id = $(this).attr('data-id');
    $('#' + id + ' circle').css({fill: '#D0D2D3'});
  });


// animated scroll loading effect

  $('.timeline-list').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: 100
   });

   $('#overall-intro').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeIn',
    offset: 100
   });

// typewriter effect

   new TypeIt('#input', {
    strings: "The Vitra Campus is a playing field – but for serious games.", 
    speed: 100,
    lifeLike: true
    // cursor: false
  });

// menu link transition 

  $('.menu a').click(function(event) {
    var id = $(this).attr("href");
    var target = $(id).offset().top;
    $('html, body').animate({
        scrollTop: target
    },1000);
    event.preventDefault();
  });

  $('.menu a').click(function(event) {
    $('#overlay-menu').toggle(0);
  });


  
})

