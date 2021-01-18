
// var Users = [
     {
       id: '1',
       firstname: 'Iman',
      lastname: 'salem',
      email: 'emanelzayadi@gmail.com',
      Password: '12345678', 
     fullname: 'Iman Ezziyadi',
   },
  ]

const form = document.querySelector('#form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email= document.getElementById('email')
const output = document.querySelector('#todos');
// const outputemail = document.querySelector('.new-email');
var updatBtn = document.querySelector('#updatBtn');
const addBtn = document.querySelector('#addTodo');
var deletebtn = document.querySelector('.deletebtn');
var small = document.querySelector('small');
var formcontrol = document.querySelector('.form-control');



 var brajobb = "false";
 addBtn.addEventListener('click', (e) => {
  e.preventDefault();
 
  brajobb = "false";
    checkInputs()
    if (brajobb === "true") {
      registerUser(firstName,lastName, email );
       listUsers();
       cleanScren;
      } else {
      console.log('can not register this User'); 
    }  
});
 const listUsers = () => {
   output.innerHTML = '';
   Users.forEach(user => {
    output.innerHTML += `<div id="${user.id}" class="bg-white border rounded p-2 d-flex justify-content-between align-items-center mt-1">${user.firstname} ${user.lastname} <br> ${user.email}  <button class="btn-danger px-3" onclick="document.getElementById('id01').style.display='block'">X</button></div>` 
   })
 }

 listUsers();


function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    
    if(firstNameValue === '' || firstNameValue.length < 2) {
        setErrorFor(firstName,'firstName cannot be blank or at least 2 characters');
     } else {
      brajobb = "true";
      small.innerText = '';
     }

      if(lastNameValue === '' || lastNameValue === null) {
        setErrorFor(lastName,'lastName connot be blonk');
       } else {
        brajobb = "true";
        small.innerText = '';
       }
      let regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
       if(emailValue === '' || (!(regEx.test(emailValue))))  {
           setErrorFor(email,'Email connot be blonk or contin å,ä,ö ')
           brajobb = "false";
          } else { 
            brajobb = "true";
            small.innerText = '';
          }
       
      
}

function setErrorFor( input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
     small.innerText = message;
    formControl.className = 'form-control error';
    brajobb = "false";
}
function setSuccessFor( input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    brajobb = "true";
}; 
 function cleanScren() {
  // const formControl = input.parentElement;
  //  const small = formControl.querySelector('small');
  // small.innerText = " ";
    // small.classList.remove('small');
  //   firstName.innerHTML = " ";
  //  lastName.innerHTML  = " " ;
  //   email.innerHTML = " " ;
  // formcontrol.className = ""
  // i.classList.remove('fa-exclamation-circle');
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
}

//  registerar användare
function registerUser() {
  var user = {
    id: Date.now().toString(),
    firstname: firstName.value,
    lastname: lastName.value,
    email: email.value,
    fullname: fullnamu(),
  };
  // Display data from the object:
  console.log(user.fullname);
  console.log(user);

  // check full name
  let registeruser = '';
    Users.forEach(person => {
       if (person.fullname === user.fullname)  {
          console.log(user.fullname +" " +" this User was input");
           registeruser = "false";
           alert('User alredy exists');
          cleanScren();
        } else {
          registeruser ="true";
        }
    });
    if (registeruser ==="true") {
       console.log("ok User registered");
      //skapa amvändare 
      Users.push(user);
      console.log('User register' + user.firstname +" "+ user.lastname);
      console.log(Users);
      cleanScren();
    
      }
   
  }
  // const delx = "false";
  //  gära varning
   output.addEventListener('click', (e) => {
      e.preventDefault();
      //  document.getElementById('id01').style.display='block'
      //    deletebtn.addEventListener('click', (e) => {
      //         e.preventDefault();
              window.alert('Are you shur delet this user?');
             Users = Users.filter(user=> user.id !== e.target.parentNode.id)
             listUsers();
            //  document.getElementById('id01').style.display='none';  
        //  });
           
        //     document.getElementById('id01').style.display='none';    
    });

//   output.addEventListener('Focus', (e) => {
//     window.alert('display information for user');
//     Users = Users.filter(user=> user.id === e.target.parentNode.id)
//     // document.getElementById('firstName') = Users.firstname
//     //  document.getElementById('lastName') = Users.lastname;
//     // document.getElementById('email') = Users.email;
//     // document.getElementById('Password') = Users.Password;
//     // document.getElementById('Passwordcheck') = Users.fullname;
//     console.log(Users);
 
//  });
  // deletebtn.addEventListener('click',(e) => {
    // e.preventDefault();
  //    onclick.deleteUser= function deleteUser() {
  //    var user = {
  //      id: Date.now().toString(),
  //      firstname: firstName.value,
  //      lastname: lastName.value,
  //      email: email.value,
  //      password: Password.value,
  //      fullname: fullnamu(),
  //     };
  //    for( var i = 0; i < Users.length; i++) { 
                                   
  //      if ( Users.fullname[i] ===  user.fullname) { 
  //         delete Users[i]; 
  //         consolw.log('delete')
  //         listUsers();
  //      }
  //     }
  //  };
  //   // Users.forEach(person => {
  //   //   if (person.fullname ===  user.fullname)  {
    //     delete 



  
  


 


  // updat
  function updateUsers() {
    if(user.id === e.target.parentNode.id){
      return this.firstName, this.lastName, this.email, this.Password
    }  
};


//    updatBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('yes');
//     window.alert('display information for user');
//     Users = Users.filter(user=> user.id === e.target.parentNode.id)
//      console.log(Users);
 
//  });
    
    
    
   
   

  //   var user = {
  //     id: Date.now().toString(),
  //     firstname: firstName.value,
  //     lastname: lastName.value,
  //     email: email.value,
  //     password: Password.value,
  //     fullname: fullnamu(),
  //   };
  //   // updateUsers();
  //   var element = _.findWhere(Users, {firstname : firstName.value  });
  //        element.firtsname = firstname ;
  //        element.firtsname = firstname ;

  //  console.log(arrayObj);
  //   listUsers()
  // const formControl = input.parentElement;
  // const small = formControl.querySelector('small');
  // const i = document.querySelector('.fa' );
  //  small.innerText = "";
  // formControl.className.innerHTML = "";

    
  //  deletebtn.addEventListener('click', (e) => {
  //    e.preventDefault();
  //    var x = console.log(Users.indexOf(firstName));
  //    Users = Users.filter(user => user.id !==  document.querySelector('#todos'));
  //     listUsers();
  //   document.getElementById('id01').style.display='none';
  //   console.log('delete');
  //     });
    
  //     cancelbtn.addEventListener('click', (e) => {
  //       // e.preventDefault();
  //       console.log('ok');
  //       listUsers();
  //        document.getElementById('id01').style.display = 'none';
  //       });
                

  // //   listUsers();
     // Users.forEach(person => {
    //   if (person.fullname ===  user.fullname)  {
    //  for( var i = 0; i < Users.length; i++){                       
    //     if ( Users[i].id ===  user.id) { 
    //        delete Users[i]; 
    //       console.log('delete');
    //       listUsers();
    //    }
    //  }
  
    // });
    
    //     delete 




  
    // göra Lista
//     const listUsers = () => {
//            output.innerHTML = ' ';
//            outputemail.innerHTM= ' ';
//          Users.forEach(user => {
//            output.innerHTML += `<div id="${user.id}" class="bg-white border rounded p-2 d-flex justify-content-between align-items-center mt-1">${user.firstName} ${user.lastName} <button class="btn btn-danger px-3">X</button></div>` 
//            outputemail.innerHTML += `<div id="${user.id}" class="bg-white border rounded p-2 d-flex justify-content-between align-items-center mt-1">${user.firstname}.${user.lastname}@domain.com <button class="btn btn-danger px-3">X</button></div>` 
      
//         });
//       }

 

    
     // create user
      // return true
      
//   
   
   

     function fullnamu() {
       const firstNameV = firstName.value;
       const lastNameV = lastName.value;
      {
        return `${firstNameV}`+' '+ `${lastNameV}`;
      }
     }
    
      
    //     let fullName = `${firstName} ${lastName}`
    //     console.log(fullName)
    // }
    
  //   let fullName = `${firstName} ${lastName}`
  //   console.log(fullName)
  //  }
  //  function emailFunction(email) {
  //   let n =  `${email}`
  //   if( n.includes("å")  || n.includes("ä") || n.includes("ö") ) {
  //       return false
  //   } else {
  //       return true;
  //   }

  // }



//  function user ( firstName,lastName,email,Password, Passwordcheck){

//      this.firstname = firstName
//      this.lastname = lastName
//      this.email = email
//      this.password = Password
//      this.passwordcheck = Passwordcheck
//      return `${this.firstName} ${this.lastName}`
//      }
// var user = {

//      firstname:  .valufirstNamee.trim(),
//     lastname: lastName.value.trim(),
//      Email: email.value.trim(),
//      password: Password.value.trim(),
//      passwordcheck: Passwordcheck.value.trim(),
//  }
//  console.log(user);
//  UserService.signUp(user);
//  class Person {
//         constructor(firstname, lastname) {
//             this.firstname = firstName
//              this.lastName = lastName
//         }

//         get fullName() {
//            return `${this.firstName} ${this.lastName}`
//          }
//      }

//      const p1 = new Person(firstName.value, lastName.valu);
//      console.log(p1.firstName);
//      console.log(p1.lastName);
//      console.log(p1.fullName);

 






