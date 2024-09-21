const form = document.querySelector('#registrationForm')

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const consfirmPassword = document.querySelector("#confirmPassword").value;
    
    const error = document.querySelector('#error')

        //username checking
        if(username === ''){
            error.textContent = "username is required"
            return //codekan meshan ku jooji 
        }
    
            //Email checking
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!email.match(emailPattern)){
        error.textContent = "Please enter a valid eamil address"
        return;
    }
  //Password
    if(password.length < 8){
        error.textContent = "Password must be at least 8 characters long."
        return
    }
 

    error.textContent = "Registered successfully"
})