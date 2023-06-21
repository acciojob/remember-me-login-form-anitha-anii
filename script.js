//your JS code here. If required.
  const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (savedUsername && savedPassword) {
      const existingButton = document.createElement('button');
      existingButton.id = 'existing';
      existingButton.textContent = 'Login as existing user';
      document.body.appendChild(existingButton);
    }

    // Handle form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Retrieve the entered username and password
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const username = usernameInput.value;
      const password = passwordInput.value;

      // Check if the "Remember me" checkbox is checked
      const rememberCheckbox = document.getElementById('checkbox');
      if (rememberCheckbox.checked) {
        // Save the username and password to local storage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        // Remove the username and password from local storage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }

      // Show the logged in message
      alert('Logged in as ' + username);
    });

    // Handle login as existing user button click
    const existingButton = document.getElementById('existing');
    if (existingButton) {
      existingButton.addEventListener('click', function() {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        usernameInput.value = savedUsername;
        passwordInput.value = savedPassword;
        alert('Logged in as ' + savedUsername);
      });
    }