var balance = 325;
var checkBalance = true;
var isActive = false;

if(!checkBalance){
  console.log("Xiexie ni. hen hao ri")

}else if(isActive && balance > 0){
  console.log("Your balance is $"+balance+".")

}else if(!isActive){
  console.log("Your account is nolonger active")

}else if(balance===0){
  console.log("Your account is empty")

}else {
  console.log("Your balance is negative, qin contact yinhang")
}