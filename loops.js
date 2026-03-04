//if statement
let cartTotal = 12000;
if(cartTotal > 10000){
    console.log("You are eligible for free shipping");
}

//if-else statement'
let balance = 5000;
let withdrawalAmt = 1000;
if(balance >= withdrawalAmt){
    console.log("Withdrawal successful");
}
else{
    console.log("Insufficient balance");
}

//if else-if else statement
let marks = 85;
if(marks >= 90){
    console.log("Grade A");
}
else if (marks >= 80){
    console.log("Grade B");
}
else if(marks >= 70){
    console.log("Grade C");
}
else {
    console.log("Grade D");
}

//switch statement
let userRole = "editor";
switch (userRole){
    case "admin":
        console.log("Admin Access granted");
        break;
    case "editor":
        console.log("Editor Access granted");
        break;
    case "viewer":
        console.log("Viewer Access granted");
        break;
    default:
        console.log("Access denied!");
}

//ternary operator
let age = 17;
Message = (age >=18)? "Can Vote!": "Cannot Vote!";
console.log(Message);

//loop understanding through pattern programming
//for loop
let i;
for ( i =1; i<=5;i++){
    console.log("*");
}

//while loop'
let j=1;
while(j<=5){
    console.log("#");
    j++;
}

//do-while loop
let k=1;
do{
    console.log("%");
    k++;
}while(k<=5);

