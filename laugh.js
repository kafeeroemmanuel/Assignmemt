// function laugh(num) {
//   var stringLaugh = "";

//   for (var x = 0; x < num; x++) {
//     stringLaugh += "ha";
//   }
//   return stringLaugh + "!";
// }
// console.log(laugh(3));

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(numb) {
  var triangle = '';
  for(var x =1; x <= numb; x++){
      triangle += makeLine(x);
      
  }
  return triangle;
  
}
console.log(buildTriangle(5));