
// // Toggle password visibility
const passwordInput = document.querySelector("#password")
const eye = document.querySelector("#eye")

eye.addEventListener("click", function(){
  this.classList.toggle("fa-eye-slash")
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
  passwordInput.setAttribute("type", type)
})


// email validation
document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  
    emailInput.addEventListener("input", function() {
      const emailValue = emailInput.value;
      const emailIsValid = emailRegex.test(emailValue);
  
      if (emailIsValid) {
        emailInput.classList.remove("invalid");
      } else {
        emailInput.classList.add("invalid");
      }
    });
  });
  

// Login Varification
const form = document.querySelector('.loginform');
const emailInput = document.getElementById('email');
const PasswordInput = document.getElementById('password');

// Event listener for the form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Check if the login is successful
    const email = emailInput.value;
    const password = PasswordInput.value;

    if (email === 'name@email.com' && password === 'password') {
        showLoginSuccessPopup();
    } else {
        alert('Login failed. Please check your email and password.');
    }
});

//login successful popup
function showLoginSuccessPopup() {
    // Create a backdrop for blurring the background
    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';

    // Append the backdrop to the body
    document.body.appendChild(backdrop);

    const popup = document.createElement('div');
    popup.className = 'login-success-popup';
    popup.textContent = 'Login Successful!';

    // Append the popup to the body
    document.body.appendChild(popup);

    // Remove the popup and backdrop after a few seconds
    setTimeout(function () {
        document.body.removeChild(popup);
        document.body.removeChild(backdrop);
    }, 3000);
}

