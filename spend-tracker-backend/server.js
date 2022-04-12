const { urlencoded, json } = require('body-parser');
const express  = require('express');
const routesHandler = require('./routes/handler.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();

// app.use(urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use('/', routesHandler.router);

//DB CONNECTION
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then( () => {
    console.log('database connection success ');
}).catch((err) => {
    console.log(err);
})


//Mongo Db Connection

//IF WORKING ON PRODUCTION CODE
// if(process.env.NODE_ENV === 'production') {
//     //serve any static file
//     app.use(express.static(path.join(__dirname, 'client/biuld')));

//     //handle react routing, return all requests to react app

//     app.get('*', function(req, res) {
//         res.sendFile(path.join(__dirname, 'client/build', routesHandler));
//     });
// }

const PORT = process.env.PORT || 4000;



app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
})