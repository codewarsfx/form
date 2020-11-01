
const domElement={
      emailInput:document.querySelector('.form-email'),
      passWordInput:document.querySelector('input[type="password"]'),
    
  }


  let emailValidate= false
  let passwordValidate=false



//   helperFunction for pattern matching
const matchPatterns= (str,pattern)=> pattern.test(str)

//helper function for diplaying error feedback
const displayErrors=(element,msg)=>{ 
    //update the text in the small tag
    element.parentNode.querySelector('small').innerHTML=msg
    //add the error class to the elements parent
    element.parentNode.className= 'error'
}

//helper function for displaying sucess
const displayS=element=> {
    element.parentNode.className="success"
}





domElement.passWordInput.addEventListener('keyup',()=>{
    //password value
   passwordValue=domElement.passWordInput.value.trim()
//password validation
   if(passwordValue.length<8 || passwordValue===''){
       displayErrors(domElement.passWordInput,"Password should be at least 8 charcters long")
       emailValidate=false
   }
   else{
       displayS(domElement.passWordInput)
       emailValidate=true
   }
   checkValid()
})


domElement.emailInput.addEventListener('keyup',()=>{
// email regular expression
    const emailRegexp= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


//email value
    const emailValue=domElement.emailInput.value.trim()

//email validation
    if(emailValue==='' || !(matchPatterns(emailValue,emailRegexp))){
        displayErrors(domElement.emailInput,"Please enter a valid mail address")
        passwordValidate=false
    }else{
        displayS(domElement.emailInput)
        passwordValidate=true
    }
    checkValid()
})

const checkValid=()=>{
    if(emailValidate&&passwordValidate){
        document.querySelector('.form-button').removeAttribute('disabled')
    }
    else{
            document.querySelector('.form-button').setAttribute('disabled','disabled')
    }
}
