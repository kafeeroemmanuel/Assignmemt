//In some situations, you might want to leverage the "falling-through" behavior of switch statements to your advantage.

//For example, when your code follows a hierarchical-type structure.

var tier = "nsfw deck";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);

var x = 1;

while(x <= 4);{
  console.log(x + "mississipi");
  x = x + 1;

}
     