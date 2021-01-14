export default class User {
  constructor(firstName, lastName, email, Password) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;     
        this.password = Password;   
      }
      id = Date.now().toString()
  
     fullName() {
       return this.firstName + this.lastName
     }
   }