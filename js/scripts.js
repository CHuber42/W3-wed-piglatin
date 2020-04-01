function leapYear(year){
  if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    return true;
  } else {
    return false;
  }
}



$(document).ready(function(){
  $("#leapYearForm").submit(function(event){
   event.preventDefault();
   var userInput = $("#inputYear").val();
  var trueOrFalse = leapYear(userInput);
   if (trueOrFalse === true){
    $("#output").append("true");
   } else {
    $("#output").append("false");  
   }
  });

});