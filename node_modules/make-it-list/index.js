#!/usr/bin/env node
import figlet from "figlet";
import inquirer from "inquirer";
import { input, confirm } from '@inquirer/prompts';
console.clear()

async function listify(){
    console.log(figlet.textSync("Make It list!!!"));
    const answers = await inquirer.prompt({
        name:'stringInput',
        type :'input',
        message:  'Whats the string that you want to listify?',
    });
    const allowSpaces = await confirm({ message: 'Do you want to keep the whitespaces?' });
console.log(allowSpaces)
    let string = answers.stringInput;
    if (!allowSpaces) {
        string = string.replace(/\s/g, "");
    }
    const list = string.toString().split('');
   
    console.log(JSON.stringify(list));
}

listify();
