/**
 * Now, you are going to be learning about HTTP requests.
 * There are different ways to make an HTTP request - This means that you make a request or server online
 * or an API located in a server for getting data back.
 * we send the request and get response back
 * do without downloading libraryes -- native request functionality
 * Use https --> secure SSL certificate
 */

 const https = require('https');
 const fs = require('fs');

 const url = "https://jsonplaceholder.typicode.com/posts";

 /** Use get method to get some data out of it
  * first parameter is going to take the url - where we making the request
  * second parameter is going to bring back the response
  * this is a little bit burbles there's a lot of code involved.
  * it simpler beacues is navitely 
  */

 https.get(url, res => {
     /**
      * Use UFT-8 
      */
     res.setEncoding('UTF-8');
     let body = '';

     res.on('data', data => {
        body += data;
     });

     res.on('end', () =>{
         body = JSON.parse(body);
         console.log(
             
            `
            ${body[0].title} 
            ${body[1].title} 

            `
     );
    //     fs.writeFile('data.json', body, 'UTF-8', (err)=>{
    //         if(err) return err;
    //         console.log('Just pulled all the posts and created file');
    //     });
     });
 });