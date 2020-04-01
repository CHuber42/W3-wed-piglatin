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
    case "A":;
    case "E":;
    case "I":;
    case "O":;
    case "U":  
      return true;
    default:
      return false;
  }
}
 
function modifyAsConstant(aWord){
  var i = 0;
  loop1:
  for (i = 0; i < aWord.length; i++){
    switch(aWord[i]){  
      case "a":;
      case "e":;
      case "i":;
      case "o":;
      case "u":
        break loop1;
      case "q":
        if (aWord[(i+1)] == "u") {
          i += 2;
          console.log(i)
          break loop1;
        };
    } //add 1 to
  }
  var back = aWord.slice(i, aWord.length); 
 
  var front = aWord.slice(0, i); 
 
  var backfront = back.concat(front);
 
  var finalWord = backfront.concat("ay ");
  return finalWord;
}



$(document).ready(function(){
  $("form#pigLatinInput").submit(function(event) {
    event.preventDefault();
    var userInput = $("#sentenceInput").val().split(" ") //array
    for (i=0; i < userInput.length; i++){
      var word = userInput[i];
      var specTwo = determineFirstChar(word);
        if(specTwo){
          var resultWord = word.concat("way ");
        }
        else{
          var resultWord = modifyAsConstant(word);  
        }
      $("#pigLatinResults").append(resultWord); 

    }
  });
});


