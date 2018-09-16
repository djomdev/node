const express = require('express');
let app = express();

const port = process.env.PORT || 9999;

//Static files
app.use('/css', express.static(__dirname + '/public'));

app.use((req, res, next)=>{

    console.log('MIDDLEWARE');

    next();

});

app.get('/', (req, res) => {

    res.send(`
    
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/css/style.css">
    <title>Document</title>
</head>

<body>

    <h1>Hello</h1>
    
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
</body>

</html>

    `);

});


app.listen(port);

console.log('it`s working');