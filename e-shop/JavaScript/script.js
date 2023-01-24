const fullname = document.getElementById('fullName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const repeatPass = document.getElementById('cnfpass')
const mobile = document.getElementById('mobile')
const form = document.getElementById('register')
const errorElement = document.getElementById('error')

const logErrorElement = document.getElementById('logerror')
const loginform = document.getElementById('loginform')
const loginUserName = document.getElementById('loguser')
const loginPassword = document.getElementById('logpassword')

let inputText = email;
//Validate email



//Register Validation
if(form){
    form.addEventListener('submit', (e)=>{
        let messages = [];
        if(fullname.value === '' ){
            messages.push('Username should not be blank.')
        }
    
        if(email.value === '' ){
            messages.push('Email should not be blank.')
        }

        if(password.value === '' ){
            messages.push('Password should not be blank.')
        }else if(password.value.length !== 6 ){
            messages.push('Password should not be less than 6 digits.')
        }

        if(password.value !== repeatPass.value ){
            messages.push('Password should be same.')
        }
    
        if(mobile.value === '' ){
            messages.push('Mobile should not be blank.')
        }else if(mobile.value.length !== 10 ){
            messages.push('Number should not be less than 10 digits.')
        }
        
    
        if (messages.length > 0) {
            e.preventDefault()
    
            errorElement.innerHTML = `<div class="relative mb-4">
            <button id="error" class="p-2 my-2 bg-red-500 text-white rounded-md focus:outline-none focus:ring-2 ring-red-300 ring-offset-2">${messages.join(',')}</button>
          </div>`
            //errorElement.innerText = messages.join(', ')
          }
    
    })
}

//Login Validation
if(loginform){
    loginform.addEventListener('submit', (e)=>{

        let logmessages = [];
        if(loginUserName.value === '' ){
            logmessages.push('Username should not be blank.')
        }
    
        if(loginPassword.value === '' ){
            logmessages.push('Password should not be blank.')
        }
    
        if (logmessages.length > 0) {
            e.preventDefault()
    
            logErrorElement.innerHTML = `<div class="relative mb-4">
            <button id="error" class="p-2 my-2 bg-red-500 text-white rounded-md focus:outline-none focus:ring-2 ring-red-300 ring-offset-2">${logmessages.join(', ')}</button>
          </div>`
          }
    
    })
}