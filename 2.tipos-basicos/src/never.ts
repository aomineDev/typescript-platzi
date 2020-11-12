function handleError (code: number, message: string): never {
  // Processyour code here
  // generate a message

  throw new Error(`${message}. Code: ${code}`)
}

try {
  handleError(404, 'Not Found')
} catch (error) {
  console.error(error.message)
}

function sumNumbers (limit: number): never {
  let sum = 0

  while (true) {
    sum++
  }

  // return sum
}

sumNumbers(10) // Ciclo infinito, el programa nunca terminara
