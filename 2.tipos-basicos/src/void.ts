// Explicito
function showInfo (user: any): void {
  console.log('User Info', user.id, user.name, user.firstName)
}

showInfo({ id: 1, name: 'aomine', firstName: 'omar' })

// Inplicito
function showFormatedInfo (user: any) {
  console.log('User Info', `
    id: ${user.id}
    username: ${user.name}
    firstName: ${user.firstName}
  `)
}

showFormatedInfo({ id: 1, name: 'aomine', firstName: 'omar' })

// Tipo Void como tipo de variable
let unusable: void

unusable = null
unusable = undefined
