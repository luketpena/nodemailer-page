console.log('JS');

$(document).ready(()=>{
  console.log('JQ');

  $('#in-mail-submit').on('click',sendMail);
})

function sendMail () {
  event.preventDefault();
  if (checkInputs()) {
    const newMessage = {
      name: $('#in-name').val(),
      subject: $('#in-subject').val(),
      email: $('#in-email').val(),
      message: $('#in-message').val()
    }

    $.ajax({
      method: 'POST',
      url: '/mail',
      data: newMessage
    }).then(response=>{
      alert('Your mail has been sent!');
      $('.mail-input').val('');
    }).catch(error=>{
      alert('There was a problem sending your message.');
    })
  } else {
    alert('Please fill out your info and message!');
  }
}

function checkInputs () {
  return ($('#in-name').val()!=''
          && $('#in-subject').val()!=''
          && $('#in-email').val()!=''
          && $('#in-mesage').val()!='');
}
