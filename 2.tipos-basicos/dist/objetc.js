// Explicito
var user;
user = {}; // Object
user = {
    id: 1,
    username: 'aomine',
    firstname: 'omar',
    isPro: true
};
console.log('user', user);
var myObj = {
    id: 1,
    username: 'aomine',
    firstname: 'omar',
    isPro: true
};
var isInstance = myObj instanceof Object; // Clase Object de JS
console.log('isInstance', isInstance);
console.log('myObj', myObj.username);
