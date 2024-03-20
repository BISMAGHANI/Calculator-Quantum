#! /usr/bin/env node

import inquirer from "inquirer"

// Asking Question from Users through Inquier

let answers = await inquirer.prompt([
    { message :   "enter first number", type : "number", name : "firstNumber"},
    { message :   "enter second number", type : "number", name : "secondNumber"},

    { message: "select one operator to perform operatons",
      type: "list",
      name: "operator",
      choices: ["Addition", "Subtraction", "Multiplication", "Division","modulo"],
}
]);

console.log(answers);

// conditional statement If-Else

if(answers.operator ===  "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if(answers.operator ===  "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if(answers.operator ===  "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
if(answers.operator ===  "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else if(answers.operator ===  "modulo"){
    console.log(answers.firstNumber % answers.secondNumber)
}
else{
    console.log("Valid Answer")
}


