//>> Requires
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


//>> Setup
const app = express();
const port = 5000;

//>> Uses
app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//>> Nodemailer
var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'luketpena@gmail.com',
        pass: '@zgar0th'
    }
});

const mailOptions = {
  from: 'sender@email.com', // sender address
  to: 'luketpena@gmail.com', // list of receivers
  subject: 'Subject of your email', // Subject line
  html: '<p>Hope nodemailer worked!</p>'// plain text body
};

/*
transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});*/

//>> Listens
app.listen(port, ()=>{
  console.log('Hey, listen!',port);
})
