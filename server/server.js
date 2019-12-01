//>> Requires
const express = require('express');
const bodyParser = require('body-parser');

//>> Setup
const app = express();
const port = 5000;

//>> Uses
app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//>> Listens

app.listen(port, ()=>{
  console.log('Hey, listen!',port);
})
