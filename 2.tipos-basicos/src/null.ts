// Explicito
let nullVariable: null
nullVariable = null
// nullVariable = 1 // Error

// Inplicito
let otherVariable = null
otherVariable = 'Test'

console.log('nullVariable', nullVariable)
console.log('otherVariable', otherVariable)

// Null como subtipo
let albumName: string
albumName = null
