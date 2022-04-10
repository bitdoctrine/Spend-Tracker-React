const { urlencoded, json } = require('body-parser');
const express  = require('express');
const routesHandler = require('./routes/handler.js');
const app = express();

app.use(urlencoded({extended: false}));
app.use('/', routesHandler);

const PORT = 4000;



app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
})