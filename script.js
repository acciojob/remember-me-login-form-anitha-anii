var loginForm = document.getElementById('loginForm');
var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');
var rememberMeCheckbox = document.getElementById('rememberMe');
var submitButton = document.getElementById('submit');
var existingUserButton = document.getElementById('existing');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  
  var username = usernameInput.value;
  var password = passwordInput.value;
  
  if (rememberMeCheckbox.checked) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
  
  alert('Logged in as ' + username);
});

if (localStorage.getItem('username') && localStorage.getItem('password')) {
  var existingUserButton = document.createElement('button');
  existingUserButton.id = 'existing';
  existingUserButton.textContent = 'Login as existing user';
  
  existingUserButton.addEventListener('click', function() {
    var savedUsername = localStorage.getItem('username');
    alert('Logged in as ' + savedUsername);
  });
  
  loginForm.appendChild(existingUserButton);
}

