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
  var i = 0;
  loop1:
  for (i = 0; i < aWord.length; i++){
    console.log(i, aWord[i])
    switch(aWord[i]){  //theater, quarter
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
  console.log(i)
  var back = aWord.slice(i, aWord.length); //uare
  console.log(back)
  var front = aWord.slice(0, i); //sq
  console.log(front)
  var backfront = back.concat(front)
  console.log(backfront);



}
// console.log(i)


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