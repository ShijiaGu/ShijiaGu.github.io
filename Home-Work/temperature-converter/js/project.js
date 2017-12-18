function temperatureConverter1(fahinput){
  var fahinput = $("#fahrenheit_input").val();
  $("#Celsius_output").html((parseInt(fahinput)-32)/1.8);
}

function temperatureConverter2(celinput){
  var celinput = $("#Celsius_input").val();
  $("#fahrenheit_output").html(parseInt(celinput)*1.8+32);
}
