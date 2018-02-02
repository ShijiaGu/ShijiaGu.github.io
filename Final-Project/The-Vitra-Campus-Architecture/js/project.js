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

var svg = SVG.get('#svg-map');

// mouse hover effect for the 
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
