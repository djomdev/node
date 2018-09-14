const readline = require('readline');
const util = require('util');

const RL = readline.createInterface(process.stdin, process.stdout);

RL.question('What is your name?', (name) => {

    RL.setPrompt(`${name} how old are you?`);

    RL.prompt();

    RL.on('line', (age) => {

        if (age < 18){
            util.log(`${name.trim()} because you are ${age} years old, you cannot proceed`);
            RL.close();
        }else{
            util.log(`${name.trim()} is great that you are ${age} years old, because you can now enjoy our services`);   
            RL.close();
        }

    });

});