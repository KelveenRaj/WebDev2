const emailContainer = document.getElementById("emailContainer");
const saveBtn = document.getElementById("save");
const validateBtn = document.getElementById("check-email");
const userInput = document.getElementById("email-input");
const alertMessage = document.getElementById("alertMessage")

let newData;
const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

saveBtn.addEventListener("click", saveEmail);

userInput.addEventListener("input", handleChange);

validateBtn.addEventListener("click", validateEmail)

function handleChange(event) {
  newData = event.target.value;
}

function saveEmail() {
  emailContainer.innerHTML = newData;
}

function validateEmail(){
    const currentValue = emailContainer.innerHTML
    if(currentValue != null){
        if(emailRegEx.test(currentValue)){
            console.log("valid email")
            alertMessage.innerHTML = "Valid Email"
        }
        else{
            console.log("not an email")
            alertMessage.innerHTML = "Invalid Email"
        }
    }
}
