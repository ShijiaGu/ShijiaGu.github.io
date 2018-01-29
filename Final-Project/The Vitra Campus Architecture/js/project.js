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

$('.project-list li').mouseover(function() {
  var id = $(this).attr('data-id');
  console.log(id);
});