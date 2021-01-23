const form = document.querySelector('#form');
const output = document.querySelector('#output');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');

let  Users = [];
const listUsers = () => {
    output.innerHTML = '' ;
    Users.forEach(user => {
        output.innerHTML += `<div id="${user.id}" class="bg-white border rounded p-2 d-flex justify-content-between align-items-center mt-1">${user.firstName} ${user.lastName} <br> ${user.email}  <button class="btn-danger px-3">X</button></div>` 
      });
}
   
//  valedate text input (firstName,lastName);
const checkInputsText = id => {
    const input = document.querySelector('#'+id);
    const error = document.querySelector('#'+id+'-error');
     let x = 'false';
         Users.forEach(user => {
             if (user.firstName =input.value ) {
                 x = 'true';
              } else {
                  x = 'false';
        }
          });
          if (x === 'true' ){
          console.log(input.value +" " +" user's name is not unique")
        }
            

      
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
            console.log(Users)
    

        listUsers ();  
       
     
    }
  
        //   when you click button och register
      form.addEventListener('submit', (e) => {
        e.preventDefault();
         if(checkInputsText ('firstName') && checkInputsText ('lastName') && checkEmail('email') ) {
            registerUser(firstName.value, lastName.value, email.value);
          listUsers ();
         firstName.innerText = '';
      
        }
    });
    // delete User
    output.addEventListener('click', (e) => {
        alert('Are you shur delet this user?');
        Users = Users.filter(user=> user.id !== e.target.parentNode.id)
        listUsers ();
      })
      
