#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";




console.log(chalk.blue.bold("\n \t Currency convertor\n"));

//define the list of currencies and their exhange rates
let exchangeRate: any = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 278.35,
    //can add more currencies 
}

//promt the user to select currenices to exchange
let userAns = await inquirer.prompt([
    {
      name: "from_currency",
      type: "list",
      message: "Select the currency to convert from:",
      choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
       name: "to_currency",
       type: "list",
      message: "Select the currency to convert into:",
      choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
       
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

//perform currency conversion by using formula
let fromAmount = exchangeRate[userAns.from_currency];
let toAmount = exchangeRate[userAns.to_currency];
let amount = userAns.amount

//formula for conversion
let baseAmount = amount / fromAmount
let conertedAmount = baseAmount * toAmount

//display conversion amount
console.log(`Converted Amount = ${chalk.green(conertedAmount.toFixed(2))}`);