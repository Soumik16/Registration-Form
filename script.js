
const form = document.querySelector("form"),
        nextBTN = form.querySelector(".nextBTN"),
        backBTN = form.querySelector(".backBTN"),
        allInput = form.querySelectorAll(".first input");

        
nextBTN.addEventListener("click", () => {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add("secActive");
        }
        else{
            form.classList.remove("secActive");
        }
    })
})

backBTN.addEventListener("click", () => form.classList.remove("secActive"))

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

// Function to show a "Submitted successfully" popup
function showPopup() {
  alert("Submitted successfully");
}

// Add an event listener to the "Submit" button
const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", showPopup);