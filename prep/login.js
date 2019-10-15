$('#loginButton').click(() => {
  if (areValidCredentials($('#username').val(), $('#password').val())) {
    window.location.href = 'journal.html';
  }
  clearValues();
});

function areValidCredentials(username, password) {
  return username === 'nick' && password === '12345';
}

function clearValues() {
  $('#username').val('');
  $('#password').val('');
}