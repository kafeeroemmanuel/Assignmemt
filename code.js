//Write a javaScript program that prompts a user to enter their year of birth and in turn prints a string in the console stating whether the user  is a minor, a youth or an elder.  Anyone below 18 years is a minor, anyone between 18 and 36 years of age is a youth and the rest are elders.

// let birthYear = prompt('enter birth year')
// let now = new Date()
// let age = now.getYear() - birth + 1900
//  if (birthYear < 18)
// console.log('your a minor');
//  else if(18<birthYear< 36)
// console.log('your a youth');
// else(birthYear > 36)
// console.log('your an adult');

// var birth = prompt("Please input your Birth year")
//     var now = new Date()
//     var age = now.getYear() - birth + 1900

//     if(age<18)
//         console.log('minor')
//     else if(age>=18 && age<36)
//         console.log('youth')
//     else console.log('elder')

function fizzBuzz(string1, string2){
  let stringLength = string1.length + string2.length;
  if (stringLength % 3 === 0 && stringLength % 5 === 0){
    console.log('FizzBuzz')
     return;
  }
  if (stringLength % 5 === 0){
    console.log('Buzz')
     return;
  }
  if (stringLength % 3 === 0){
    console.log('Fizz')
     return;
  }
    console.log("here we are on vibes")

}
