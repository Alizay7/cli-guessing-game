#! usr/bin/env node
import inquirer from "inquirer";

console.log("welcome to cli game");

const randomNumber = Math.floor(Math.random()*5 +1);
const answer = await inquirer.prompt([
    {
    name :"userGuesssedNumer",
    type:"number",
    message:"Enter your guess number(number limit from 1 to 5):",
 
},
]);
if (answer.userGuesssedNumer === randomNumber){
    console.log("Congratulation ! you guess a correct number.");

}
else {
    console.log("sorry, you guess a wrong number.");
}