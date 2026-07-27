//THE VISUAL ATM WORKFLOW

// These two links allow us to print our final results directly onto the webpage screen
const receiptTitle = document.getElementById("receipt-title");
const receiptText = document.getElementById("receipt-text");

// 1. SET THEINITIAL BALANCE & SECURITY DATA
let userBalance = "1000";
let pin ="1468";

// 2. ASK THE USER FOR INPUT (Runs automatically as soon as the page loads)
let enteredpin= prompt("Enter your 4-digit pin");

// 3. VALIDATE / CHECK THE PIN NUMBER
if (enteredpin === pin){
   let userAmount = prompt(`PIN ACCEPTED! Your current balance is ${userBalance}, Enter amount to withdraw`);
    console.log(typeof(userAmount));//string
    userAmount= Number(userAmount)
    console.log(typeof(userAmount)); //number
    if (userBalance >= userAmount){
        let newUserBalance = userBalance - userAmount;
        // userBalance = userBalance - userBcalance
        // userBalance -= userAmount;

        receiptText.innerText = "TRANSACTION SUCESSFUL";
    }
 } else {
prompt(`INCORRECT PIN! Try again`);
 }

    
    
    
    
    // 4. CHECK AVAILABILITY OF FUNDS
    
        
    
        

    
    // TASK 6: Handle the error layout if the PIN was completely wrong
    