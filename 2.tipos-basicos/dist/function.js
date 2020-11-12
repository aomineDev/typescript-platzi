// Crear una fotografia | JS
function createPicture(title, date, size) {
    // title
}
function createOtherPicture(title, date, size) {
    // Se crea la fotografia
    console.log('create Picture using', title, date, size);
}
createOtherPicture('My bitrhday', '2020-03-10', '1000x1000');
// Parametros opcionales
function createUser(name, age) {
    // Se crea el usuario
    console.log('create user using', name, age);
}
createUser('aomine', 20);
createUser('aomine');
createUser();
// Flat Array functions
var createPic = function (title, date, size) {
    return { title: title, date: date, size: size };
};
var picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log('picture', picture);
// Tipo de retorno con TS
function handleError(code, message) {
    // Procesamiento del código
    if (message === 'error') {
        throw new Error(message + ". Code error: " + code);
    }
    else {
        return 'An error has ocurred';
    }
}
try {
    var result = handleError(200, 'OK');
    console.log(result);
    handleError(500, 'error');
}
catch (error) {
    console.error(error.message);
}
