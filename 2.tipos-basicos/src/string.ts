// Explicito
let username: string = 'aomine'
username = 'omar'
// username = true

// template String
// Uso de back-tit `
let userInfo: string
userInfo = `
  User Info:
  username: ${username}
  firstName: ${username} Carrión
  phone: 321456789
  isPro: true
`

console.log(userInfo)