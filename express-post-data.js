const express = require('express');
const bodyParser = require('body-parser');

let app = express();

/**
 * We are connecting to the database and then we send the values of the email, password
 * and we get the user either register or logged into the application.
 * 
 * By using bodyParser module, you are able to parse post data and inserting it 
 * in the application using this middleware feature. You will see this in all post data
 * 
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Static files
app.use('/assets', express.static(__dirname + '/public'));

app.use((req, res, next) => {

    console.log('MIDDLEWARE');

    next();

});


app.post('/post', (req, res)=>{

    /**
     * body will contain all data from the form. Afterwards, you will get an object 
     * with the info placed in the form
     */
    console.log(req.body);
});

app.listen(9999);

console.log('it`s working');