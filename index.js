#!/usr/bin/env node
import figlet from "figlet";
import inquirer from "inquirer";
  
async function listify(){
    
    console.log(figlet.textSync("Make It list!!!"));
    const answers = await inquirer.prompt({
        name:'stringInput',
        type :'input',
        message:  'Whats the string that you want to listify?',
    });
    let string = answers.stringInput;
    
    const list = string.toString().split('');
    console.log(`[${list.join(", ")}]`);
}

listify();
