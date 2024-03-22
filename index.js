#! /usr/bin/env node
import inquirer from "inquirer";
//printing a welcome message
console.log("\n\tWelcome to \'Riza shakeel\' - CLI Simple Calculater\n");
//Asking Question From User Through Inquirer
let answers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
        message: "select One Operator To Perform Operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
//Conditional statment If - Else
if (answers.operator === "Addition") {
    console.log(answers.FirstNumber + answers.SecondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.FirstNumber - answers.SecondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.FirstNumber * answers.SecondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.FirstNumber / answers.SecondNumber);
}
else {
    console.log("Invalid input");
}
