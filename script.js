//your JS code here. If required.
    // Check if there are saved details in localStorage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    const existingButton = document.getElementById('existing');

    if (savedUsername && savedPassword) {
      // Show "Login as existing user" button
      if (!existingButton) {
        const button = document.createElement('button');
        button.id = 'existing';
        button.textContent = 'Login as existing user';
        document.body.appendChild(button);
      }
    } else {
      // Remove "Login as existing user" button
      if (existingButton) {
        existingButton.remove();
      }
    }

    // Handle form submission
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const rememberMe = document.getElementById('rememberMe').checked;

      if (rememberMe) {
        // Save details to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        // Remove details from localStorage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }

      // Show logged in message
      alert('Logged in as ' + username);
    });

    // Handle "Login as existing user" button click
    if (existingButton) {
      existingButton.addEventListener('click', function() {
        alert('Logged in as ' + savedUsername);
      });
    }