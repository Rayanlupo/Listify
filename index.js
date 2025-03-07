#!/usr/bin/env node
import inquirer from "inquirer";


async function listify(){
    const answers = await inquirer.prompt({
        name:'stringInput',
        type :'input',
        message:  'Whats the string that you want to listify?',
    })
    let string = answers.stringInput;
    
    const list = string.toString().split('');
    console.log(list);
}

await listify();
