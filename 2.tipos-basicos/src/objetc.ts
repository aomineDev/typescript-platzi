// Explicito
let user: object
user = {} // Object

user = {
  id: 1,
  username: 'aomine',
  firstname: 'omar',
  isPro: true
}

console.log('user', user)

const myObj = {
  id: 1,
  username: 'aomine',
  firstname: 'omar',
  isPro: true
}

const isInstance = myObj instanceof Object // Clase Object de JS
console.log('isInstance', isInstance)
console.log('myObj', myObj.username)
