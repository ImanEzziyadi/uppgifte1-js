const form = document.querySelector('#form');
const output = document.querySelector('#output');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
let  Users = [];
const listUsers = () => {
    output.innerText = '' ;
    Users.forEach(user => {
        let outputhtml = `
        <div class="user">
          <div class="text">
            <h3>${user.firstName} ${user.lastName}</h3>
            <small>${user.email}</small>
          </div>
          <div class="buttons">
            <button class="btn btn-primary">change</button>
            <button class="btn btn-danger">delete</button>
          </div>
        </div>
    `
       output.innerHTML += outputhtml
       })
  }
   
//  valedate text input (firstName,lastName);
const checkInputsText = id => {
    const input = document.querySelector('#'+id);
    const error = document.querySelector('#'+id+'-error');
      
    if(input.value === '' || input.value.length < 2) {
        error.innerText = 'Name cannot be blank or at least 2 characters'
     return false;
    } else {
        error.innerText = '';
        return true;
      }
}
  
    const checkEmail = id => {
        const input = document.querySelector('#'+id);
        const error = document.querySelector('#'+id+'-error');
      
        let regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
      
        if(regEx.test(input.value)) {
          error.innerText = '';
          return true;
        } else {
            error.innerText ='You must enter a valid email address';
          return false;
        }
      }
    //   att skapa användare
    const registerUser = (firstName, lastName, email) => {
        let user = {
          id: Date.now().toString(),
          firstName,
          lastName,
          email
        }
        Users.push(user);
        console.log('User register' +"  " +user.firstName +" "+ user.lastName);
        console.log(Users);
    }
      listUsers ();
      const validate = () => {

        document.querySelectorAll('input').forEach(input => {
        
          if(input.type === "text") {
            checkInputsText(input.id);
            // console.log(checkInputsText(input, error))
          }
        
          if(input.type === "email") {
            checkEmail(input.id);
          }
          
        })
      }
      
      
        //   when you click button och register
      form.addEventListener('submit', (e) => {
        e.preventDefault();
         validate()
        if(checkInputsText ('firstName') && checkInputsText ('lastName') && checkEmail('email')) {
          
            registerUser(firstName.value, lastName.value, email.value);
          listUsers ();
          console.log('ghghghgjh');
         firstName.innerText = '';
      
        }
    });

    
