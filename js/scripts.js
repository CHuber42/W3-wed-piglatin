// function leapYear(year){
//   if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
//     return true;
//   } else {
//     return false;
//   }
// }
// $(document).ready(function(){
//   $("#leapYearForm").submit(function(event){
//    event.preventDefault();
//    var userInput = $("#inputYear").val();
//   var trueOrFalse = leapYear(userInput);
//    if (trueOrFalse === true){
//     $("#inputYearOutput").append("true");
//    } else {
//     $("#inputYearOutput").append("false");  
//    }
//   });

// });

function determineFirstChar(aWord){
  switch(aWord[0]){
    case "a":;
    case "e":;
    case "i":;
    case "o":;
    case "u":
      return true;
    default:
      return false;
  }
}
 
function modifyAsConstant(aWord){
var i = 1;
loop1:
for (i; i < aWord.length; i++){
  switch(aWord[i]){
    case "a":;
    case "e":;
    case "i":;
    case "o":;
    case "u":
      break loop1;
  }






  }






}




$(document).ready(function(){
  $("form#pigLatinInput").submit(function(event) {
    event.preventDefault();
    var userInput = $("#sentenceInput").val().split(" ") //array
    //install for loop here
    var word = userInput[0];
    var specTwo = determineFirstChar(word);
      if(specTwo){
        word = word.concat("way");
      }
      else{
        var specFive = modifyAsConstant(word);
        
      }
    
  
  });
});