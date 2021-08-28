const express = require('express');
const port = 8000;
const app = express();

const db = require('./config/mongoose');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const JWT = require('./config/passport_jwt');

app.use('/', require('./routes/index') );

app.listen(port, (err) => {
    if(err){
        console.log(`error while running the server on port:${port}`);
    }
    console.log(`Server is up and running on port:${port}`);
})
