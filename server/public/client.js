console.log('JS');

$(document).ready(()=>{
  console.log('JQ');

  $('#in-mail-submit').on('click',sendMail);
})


function sendMail () {
  event.preventDefault();
  console.log('SUBMIT');
}
