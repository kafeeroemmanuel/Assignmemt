// /*
//  * Programming Quiz: JuliaJames (4-1)
//  */
// /*
//  * QUIZ REQUIREMENTS
//  * - Your code should have a variable `x` with a starting value of `1`
//  * - Your code should include a `while` loop
//  * - Your `while` loop should have a stop condition
//  * - Your code should use a conditional statement
//  * - Your code should increment `x` by `1` each time the loop executes
//  * - Your code should produce the expected output
//  * - Your code should not be empty
//  * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
//  */
 
// var x = 1;

// while (x < 16) {
//   x % 3 === 0 && x % 5 === 0;
//   console.log('JuliaJames')
//   !(x % 3 === 0) || !(x % 5 === 0);
//   console.log(x);
//   x % 3 === 0;
//   console.log('Julia')
//   x % 5 === 0;
//   console.log('James')
  
//   x += 1;
// }

var num = 9;

while (num >=1) {
    // Last iteration. Note occurances of bottle, bottle, bottleS
    if (num === 1) {
        console.log(num + " bottle of juice on the wall! "
                    + num + " bottle of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
    }
    // Second-last iteration. Note occurances of bottleS, bottleS, bottle
    else if (num === 2){
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottle of juice on the wall!");
    }
    // All other iterations. Note occurances of bottleS, bottleS, bottleS
    else {
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
    }
    num = num - 1;
}
    