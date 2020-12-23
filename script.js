const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email= document.getElementById('email');
const Password = document.getElementById('Password');
const Passwordcheck = document.getElementById('Passwordcheck');

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const PasswordValue = Password.value.trim();
    const PasswordcheckValue = Passwordcheck.value.trim();

     if(firstNameValue === '' || firstNameValue == null) {
        setErrorFor(firstName,'firstName connot be blonk')
     } else {
        setSuccessFor(firstName);

     }

      if(lastNameValue === '' || lastNameValue == null) {
        setErrorFor(lastName,'lastName connot be blonk')
       } else {
         setSuccessFor(lastName);
       }
       if(emailValue === '') {
           setErrorFor(email,'Email connot be blonk ')
        } else {
        //  if (!isEmail(emailValue)) {
            // setErrorFor(email,'Email is not valid ') 
        //  } else {
             setSuccessFor(email);
         }
       
       if(PasswordValue === '' || PasswordValue == null) {
        setErrorFor(Password,'Password connot be blonk');
       } else if (PasswordValue.length <= 7) {
           setErrorFor(Password,'Password must be longer than 7');
       } else {
            setSuccessFor(Password);
       }
       if(PasswordcheckValue === '' || PasswordcheckValue == null) {
        setErrorFor(Passwordcheck,'Password check connot be blonk');
       } else if (PasswordValue !== PasswordcheckValue) {
           setErrorFor(Passwordcheck,'Password does not match');
       } else {
        setSuccessFor(Passwordcheck);
       }      
        
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})
function setErrorFor( input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
     small.innerText = message;
    formControl.className = 'form-control error';
}
function setSuccessFor( input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}