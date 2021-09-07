// Given an Array containing integers, floats and one character strings, 
// write a function that takes an Array and returns an Object with keys evens, odds, and chars. 
// The value for evens is an array of sorted even numbers, 
// the value for odds is a list of sorted odd numbers and chars is a list of sorted character strings.


function boomBix(evens, odds, strings){
let boomBix = [1, 8, 4, 22, 'o', 34, 1.3, 't', 4.5, 7.8, 'y'];
let evens = boomBix % 2 === 0;
let odd = boomBix % 2 === 1;
let evens = boomBix.sort(function(evens, odds, strings){return boomBix % 2 === 0});
let odds = boomBix.sort(function(evens, odds, strings){return boomBix % 2 === 1});
}
console.log(evens);