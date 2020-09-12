const express = require('express'); 
const app = express(); 

let port = process.env.port || 3000; 

app.listen(port, () => {
    console.log(`Listening on port ${port}`); 
}); 

app.get('/', (req, res) => {
    res.send('Welcome to the home page'); 
}); 