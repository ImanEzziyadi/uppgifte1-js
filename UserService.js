import User from '../models/User.js'

export default class UserService {
  constructor() {}

  static signUp(user) {
    const newUser = new User(user.firstName,user.lastName, user.email, user.Password, user.Passwordcheck)
    console.log('registrating the user')
    console.log(newUser)
  }

  static signIn(_email, _Password) {
    console.log('logging in the user')
    console.log(email, Password)
  }
}