//require the express module
const express = require('express');
//initializing express as a new instance
const app = express();
//assign the port number
const PORT = 3000;


// route handler
app.get('/', (req, res) => {
    res.send('Hello World!');
});


// starting our server
app.listen(PORT, () =>{
    console.log(`Connected to server on port ${PORT}`);
});