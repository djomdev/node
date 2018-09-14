/** Now we are going to learn how to create files with node
 * we using javascript to create a file using node in the background
 * First, we are requiring 'fs'
 */
const fs = require('fs');

/* We use a file system to invoke a `writeFile();` function
 * We got the synchronous option
 * The first parameter is the path or the file that we want to write
 *  in this case the file is going to be inside the `writeFile('./modules/data.html')` function
 * The second parameter is the data we wanted to put in the file and you can include
 *  whatever you want.
 *  variables might be included
 * The third parameter would be UFT-8 like a string
 * and the call-back function to use an error function
 * */

fs.writeFile('./modules/data.html', ` \n Hello, this file has just been created \n`, 'UTF-8', (err)=> {
    if(err) return err;
    console.log('The file has been saved');

    /** append data using appendFile using the following arguments:
     *  Example: `appendFile(path, data, options, callback)`
     *  When creating this extra data make sure to include some line breaks using `\n` on each side
    */

    fs.appendFile('./modules/data.html', ' \n Extra data appended to this file \n', 'UTF-8', (err) => {
        if(err) return err;
        console.log('The file has been saved');
    });

 });

