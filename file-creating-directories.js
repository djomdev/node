 /** Now we are learning how to create directories check if the directory exists and 
  * if it doesn't exist we are going to create it and write a file and create a new file
  * First, let's require the file system. The way we create directories is `mkdir()` function
  * make directory function `mkdir()` is going to take a couple of diferent arguments:
  * The first argument is going to be the path or the directory you want to create, the mode which has to
  * do with permission. -advance concepts here.
  * Another parameter is going to be the callback function. Name the directory views. 
  * mkdirSync --> try it for testing this module does not need a callback function
  * mkdir will or the app will crash.
 */

const fs = require('fs');

/* check here if the directory exists
 * let's wrap this in an IF statement - Let's just use another function that coexists and let's
 * pass views. If this does not exist the view folder then tell node to create it.
 * - insert exclamation point ! before file system.
 */

if(!fs.exists("views")) {

    fs.mkdir("views", (err)=>{

        if(err) return err;

        fs.writeFile("./views/new.html", 'this is a new directory and data', (err)=>{

            if(err) return err;

            console.log('Directory and file saved')
        })
    }); 
}
