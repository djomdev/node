/* [X] `fs` is for listing every data coming from the file you want to read.
 * [X] Grant the name of the module we are using `fs = require('fs');`
 * [X] There's two ways of reading files. Either we read them asynchronously or 
 *      synchronously. When we do in synchronousl stuff, it means that we have to wait
 *      for it to finish just to do other stuff.  Node is by default asynchronourly.
 *      
 *      `readdirSyn` = good to do it when first starting the application - when reading
 *      configuration files that the application needs before anything else. When you
 *      don't want to do stuff synchronously when you don't want all the stuff to 
 *      interfere with your code.
 *      
 *      `readdir` = use it when you're doing stuff that requires us to use other things, like
 *      when you don't want interruption and you want to just keep going with your app.
 *      It keeps executing stuff. Asynchronous is the way. 
 *      `readdir('./')` <-- inside the parenthesis - write the path of what we want to read.
 *      `./` means current directory. */
const fs = require('fs');
    /* Here we are using a call-back function because the callback is what's going to
     * bring our data back in. `(err, content) => { ... }`
     * `err, content` --> are the two arguments that we want the app takes either it brings
     * the error or it brings content */
fs.readdir('./', (err, content) => {
    /* In this part, youi can say if error then return error */
    if(err) return err; //throw the error here instead of return
    /* we can see the content which is the list of files in the current directory.  */
    console.log(content);

});

/* You can read files using readFile() function 
 * In this part you can callback in the `global.html` file content  
 * Use UTF - it will read anything that its in UTF-8 coding */

fs.readFile('global.html', 'UTF-8', (err, content) => {
/* callback the whole content of global.html if you are not using UTF-8 encoding
 * you're going to see a buffer returning or data in binary format of that file
 * node is using c++ to do this features - c++ is very close to machine code 
 * you have to let node know a little bit of more information on what kind of
 * data you want back */
    console.log(content);    

});

