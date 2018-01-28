$(document).ready(function () {

  $(window).scroll(function(){
    // console.log("scroll");
    // console.log($(window).scrollTop());

    // if ($(window).scrollTop()>150) {
    //   $("header").css ("font-size","20px");
    // } else {
    //   $("header").css ("font-size","75px");
    // }

    if ($(window).scrollTop()>150) {
      $("header").addClass ("small-nav");
    } else {
      $("header").removeClass ("small-nav");
    }
  });

})
