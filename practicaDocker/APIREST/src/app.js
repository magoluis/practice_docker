
const cors = require('cors');
const express = require("express");
const app = express();
const { json } = require('express');

app.use(cors());
app.options('*', cors());

const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));


app.set('port', process.env.PORT || 3000 );


app.use(morgan('dev'));
app.use(bodyParser.json());

const rutaTuit = require('./routes/tuitRoute');



app.use(json());

app.use("/municipio",rutaTuit);


app.listen(app.get('port'),()=>{
  console.log("server on port 3000");

});
