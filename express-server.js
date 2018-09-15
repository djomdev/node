const express = require('express');
let app = express();

const port = process.env.PORT || 9999;

app.get(('/'), (req, res)=>{

    res.send('<h1>Hello<h1>');

});

app.get('/api', (req, res)=>{

    res.json({name: 'Diego'});

})

app.listen(port);

console.log('it`s working');