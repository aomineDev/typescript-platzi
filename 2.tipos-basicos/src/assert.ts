// <type>
let randomName: any
randomName = 'aomine'

// Tenemos una cadena, TS confía en mi!
let message: string = (<string>randomName).length > 5 ? `Welcome ${randomName}` : 'Username is too short'

console.log('message', message)

// as
let usernameWithId: any = 'aomine 1'

// Como obtener el random name?
randomName = (usernameWithId as string).substr(0, 6)
console.log('Username only', randomName)