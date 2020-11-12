// Tipos literales
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000'

let smallPicture: SquareSize
smallPicture = '100x100'
// smallPicture = '200x200' // Error

let medimPicture:SquareSize
medimPicture = '500x500'

console.log('smallPicture', smallPicture)
console.log('medimPicture', medimPicture)
