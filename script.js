//get Dom elements 
  const domElements={
      firstNameInput:document.querySelector('#firstName'),
      lastNameInput:document.querySelector('#lastName'),
      emailInput:document.querySelector('input[type="email"]'),
      passWordInput:document.querySelector('input[type="password"]'),
      confirmInput:document.querySelector('#confirmPass'),
      submitButton:document.querySelector('.form-button'),
      form:document.querySelector('form'),
  }
  let  passwordValue=""

  let s,t,u,v,w


//   helperFunction for pattern matching
const matchPattern= (str,pattern)=> pattern.test(str)

//helper function for diplaying error feedback
const displayError=(element,msg)=>{ 
    //update the text in the small tag
    element.parentNode.querySelector('small').innerHTML=msg
    //add the error class to the elements parent
    element.parentNode.className= 'error'
}

//helper function for displaying sucess
const displaySuccess=element=> {
    element.parentNode.className="success"
}

// listener for submit event
domElements.form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('hey')

})


domElements.passWordInput.addEventListener('keyup',()=>{
    //password value
   passwordValue=domElements.passWordInput.value.trim()
//password validation
   if(passwordValue.length<8 || passwordValue===''){
       displayError(domElements.passWordInput,"Password should be at least 8 charcters long")
       s=false
   }
   else{
       displaySuccess(domElements.passWordInput)
       s=true
   }
})

domElements.confirmInput.addEventListener('keyup',()=>{
    //confirm password value
 const confirmPassValue= domElements.confirmInput.value.trim()
//confirm pass validation
 if(confirmPassValue==='' || (confirmPassValue !== passwordValue)){
     displayError(domElements.confirmInput,'Password doesnt match')
     t=false
 }else{
     displaySuccess(domElements.confirmInput)
     t=true
 }
})




domElements.emailInput.addEventListener('keyup',()=>{
//email regular expression
    const emailRegexp= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

//email value
    const emailValue=domElements.emailInput.value.trim()

//email validation
    if(emailValue==='' || !(matchPattern(emailValue,emailRegexp))){
        displayError(domElements.emailInput,"Please enter a valid mail address")
        u=false
    }else{
        displaySuccess(domElements.emailInput)
        u=true
    }
})

domElements.firstNameInput.addEventListener('keyup',()=>{
     //get name value
 const firstNameValue= domElements.firstNameInput.value.trim()
 
//  name validation
 if(firstNameValue==='' || matchPattern(firstNameValue,/[0-9]/)) {
     displayError(domElements.firstNameInput,'Name cannot contain numbers ')
     v=false
 }else{
     displaySuccess(domElements.firstNameInput)
     v=true
 }

})


domElements.lastNameInput.addEventListener('keyup',()=>{
  //get last name value
 const lastNameValue= domElements.lastNameInput.value.trim()
 
//  name validation
 if(lastNameValue==='' || matchPattern(lastNameValue,/[0-9]/)) {
     
     displayError(domElements.lastNameInput,'Name cannot contain numbers')
     w=false
 }else{
     displaySuccess(domElements.lastNameInput)

     w=true

     if(u&&v&&w&&s&&t){
                             domElements.submitButton.removeAttribute('disabled')
     }
 }
})




