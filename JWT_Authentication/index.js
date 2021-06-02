const express= require('express');
const app= express();
require('./database/db');

app.get('/',(req,res) => {
    res.send('Started');
})

app.listen(2000, () => console.log('Server is ready'));

