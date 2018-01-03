$("#submit").click (function(){
  var a = $("#a").val();
  var b = $("#b").val();

  if (a == b) {
    $("#comparison").html("==");
  } else if (parseInt(a) < parseInt(b)){
    $("#comparison").html("<");
  } else if (parseInt(a) > parseInt(b)){
    $("#comparison").html(">");
  }

})