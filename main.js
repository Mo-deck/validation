const form = document.querySelector('#registrationForm')

//form.addEventListener("submit", function(event){
// event.preventDefault()

    // form.addEventListener("submit", function(event){
//     event.preventDefault()
    
    // const username = document.querySelector("#username").value;
    // const email = document.querySelector("#email").value;
    // const password = document.querySelector("#password").value;
    // const consfirmPassword = document.querySelector("#confirmPassword").value;
    
    // const error = document.querySelector('#error')

//         //username checking
//         if(username === ''){
//             error.textContent = "username is required"
//             return //codekan meshan ku jooji 
//         }
    
//             //Email checking
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if(!email.match(emailPattern)){
//         error.textContent = "Please enter a valid eamil address"
//         return;
//     }
//   //Password
//     if(password.length < 8){
//         error.textContent = "Password must be at least 8 characters long."
//         return
//     }
//     //Confirm Password
//     if(password !== consfirmPassword){
//         error.textContent = "password do not match"
//         return
//     }

   
  //username checking
//   if(username === ''){
//     error.textContent = "username is required"
//      return //codekan meshan ku jooji 
//   }

//       //Email checking
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if(!email.match(emailPattern)){
//          error.textContent = "Please enter a valid eamil address"
//         return;
//     }

//         //Password
//      if(password.length < 8){
//          error.textContent = "Password must be at least 8 characters long."
//         return
//      }
//      //Confirm Password
//      if(password !== consfirmPassword){
//          error.textContent = "password do not match"
//          return
//      }

//     error.textContent = "Registered successfully"
//})

const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const consfirmPassword = document.querySelector("#confirmPassword")
const error = document.querySelector('#error')
const success = document.querySelector('#success')

form.addEventListener("submit", function(event){
    event.preventDefault()
    error.textContent = ""
    success.textContent = ""

   //validate fields
   
   const isUsernameValid = validateUsername()
   const isEmailValid = validateEmail()
   const isPasswordvalid = validatePassword()



   if(!isUsernameValid){
    username.focus()
    return
   }else if(!isEmailValid){
     email.focus()
     return
   }else if(isPasswordvalid){
    password.focus()
    return
   }


   success.textContent = "Registration successfully!"

})

    //check username
 function validateUsername(){
    if(username.value === ''){
        //error
        SetError(username, 'Username is required')
        return false
    }else{
        //success
        setSuccess(username);
        return true
    }
}
      //check eamil
   function validateEmail(){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!email.value.match(emailPattern)){
        SetError(email, "Please enter a valid email address");
        return false
    }else{
        setSuccess(email)
        return true
    }
}

  // check password
   function validatePassword(){
    if(password.value.length < 8){
        SetError(password, "password must be at least  8 characters long.")
        return false
    }else{
        setSuccess(password)
        return true
    }
}




function SetError(element, message){
    //show error class
    element.classList.add('invalid')
    //hide success class
    element.classList.remove('valid')
}
function setSuccess(element, message){
    //show success class
    element.classList.add('valid')
    //hide error class
    element.classList.remove('invalid')
}

