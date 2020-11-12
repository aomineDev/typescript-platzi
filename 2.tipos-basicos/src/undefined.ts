// Explicito
let undefinedVariable: undefined
undefinedVariable = undefined
// undefinedVariable = 'undefined' // Error

// Inplicito
let otherUndefined = undefined
otherUndefined = 'Test'

console.log('undefinedVariable', undefinedVariable)
console.log('otherUndefined', otherUndefined)

// Null como subtipo
let otherAlbumName: string
otherAlbumName = undefined
