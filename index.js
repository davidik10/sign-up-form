const form = document.querySelector("form");
function checkPassword(form) {
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if (password != confirmPassword) {
      alert("Error! Password did not match.");
     } /* else {
      alert("Password Match. Congratulations!");
    } */ 
  }

//console.log(password.value)