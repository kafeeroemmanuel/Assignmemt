var balance = -9;
var checkBalance = true;
var isActive = true;

if(!checkBalance){
  console.log("Thank you. Have a nice day")

}else{
  if(isActive && balance > 0){
    console.log("Your balance  is $"+balance+".")

  }else{
    if(!isActive){
      console.log("Your account is nolonger active")

    }else{
      if(balance===0){
        console.log("Your account is empty")

      }else{
        console.log("Your balance is negative. Please contact bank")
      }
    }
  }
}