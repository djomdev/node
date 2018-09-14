//The process object can read environment information, communicate with the terminal with shell here in code. get info from current process.
//

// console.log(process.argv);

// var flag = process.argv.indexOf('--user');

// console.log(flag + 1);


// Standard Out object --> 
process.stdout.write('Ask me a question'); 

// Standard In object --> 
// .on() method is a listener -- 'data' is the name of that listener it has a callback function getting that data back
process.stdin.on('data', function(answer) {
    // in the following console.log we are converting the data to string just to make sure that we get a string.
    console.log(answer.toString().trim());
});

process.exit();