$('#loginButton').click(() => {

  if ($('#username').val() == 'Nick' && $('#password').val() == '12345') {
    window.location.href = 'journal.html';
  } else {
    alert('Invalid username or password');
  }

});

