#!/usr/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        name: "hamza",
        type: "number",
        message: "Enter your firstnumber",
    },
    {
        name: "bilal",
        type: "number",
        message: "Enter your secondnumber",
    },
    {
        message: "select one of the operator",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "Division"],
    },
]);
if (answers.operator === "addition") {
    console.log(answers.hamza + answers.bilal);
}
else if (answers.operator === "subtraction") {
    console.log(answers.hamza - answers.bilal);
}
else if (answers.operator === "multiplication") {
    console.log(answers.hamza * answers.bilal);
}
else if (answers.operator === "Division") {
    console.log(answers.hamza / answers.bilal);
}
else {
    console.log("invalid operator");
}
