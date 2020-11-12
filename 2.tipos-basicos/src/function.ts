// Crear una fotografia | JS
function createPicture (title, date, size) {
  // title
}

// Crear una fotografia | TS
type Size = '100x100' | '500x500' | '1000x1000'

function createOtherPicture (title: string, date: string, size: Size) {
  // Se crea la fotografia
  console.log('create Picture using', title, date, size)
}

createOtherPicture('My bitrhday', '2020-03-10', '1000x1000')

// Parametros opcionales
function createUser (name?: string, age?: number) {
  // Se crea el usuario
  console.log('create user using', name, age)
}

createUser('aomine', 20)
createUser('aomine')
createUser()

// Flat Array functions
let createPic = (title: string, date: string, size: Size): object => {
  return { title, date, size }
}

const picture = createPic('Platzi session', '2020-03-10', '100x100')
console.log('picture', picture)

// Tipo de retorno con TS
function handleError (code: number, message: string): never | string {
  // Procesamiento del código
  if (message === 'error') {
    throw new Error(`${message}. Code error: ${code}`)
  } else {
    return 'An error has ocurred'
  }
}

try {
  let result = handleError(200, 'OK')
  console.log(result)

  handleError(500, 'error')
} catch (error) {
  console.error(error.message)
}

