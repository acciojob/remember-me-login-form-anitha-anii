
    function submitForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var rememberMe = document.getElementById("checkbox").checked;

  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  alert("Logged in as " + username);
}

window.onload = function() {
  var existingUserButton = document.getElementById("existing");
  var savedUsername = localStorage.getItem("username");

  if (savedUsername) {
    existingUserButton.style.display = "inline";
  }

  existingUserButton.onclick = function() {
    alert("Logged in as " + savedUsername);
  };
};
