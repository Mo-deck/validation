const form = document.querySelector('#registrationForm')

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const consfirmPassword = document.querySelector("#confirmPassword").value;
    
    const error = document.querySelector('#error')

    
    error.textContent = "Registered successfully"
})