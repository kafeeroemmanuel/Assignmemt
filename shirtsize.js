// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 18;
var shirtLength = 28.5;
var shirtSleeve = 8.34;

if(shirtWidth <= 19 && shirtLength <= 28 && shirtSleeve <= 8.37){
  console.log("the shirt is small size, S ")
}else if((shirtWidth >= 20 && shirtWidth <= 21) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.14 && shirtSleeve <= 8.38)){
  console.log("the shirt is medium size, M ")

}else if((shirtWidth >= 22 &&  shirtWidth <= 23) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >=8.39 && shirtSleeve <= 8.63)){
  console.log("the shirt is large size, L ")

}else if((shirtWidth >= 24 &&  shirtWidth <= 25) && (shirtLength >=31 && shirtLength < 32) && (shirtSleeve >=8.64 && shirtSleeve <= 8.88)){
  console.log("the shirt is extra large size, XL ")

}else if((shirtWidth >=26 && shirtWidth < 28) && (shirtLength >=33 && shirtLength < 34) && (shirtSleeve >=8.89 && shirtSleeve < 10.13)){
  console.log("the shirt is extra extra large size, 2XL ")

}else if((shirtWidth >=28 && shirtWidth <= 28) && (shirtLength >= 34) && (shirtSleeve >=9.64 && shirtSleeve <= 10.13)){
  console.log("the shirt is extra extra extra large size, 3XL ")

}else{
  console.log("N/A")
}
