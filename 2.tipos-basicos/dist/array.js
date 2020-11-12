// Explicito
var users;
users = ['aomine', 'omar', 'akashi'];
// users = [1, true, 'teest'] // Error
// Inferido
var otherUsers = ['aomine', 'omar', 'akashi'];
// otherUsers = [1, true, 'teest'] // Error
// Array<TIPO>
var pictureTitles;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];
console.log('first user', users[0]);
console.log('first title', pictureTitles[0]);
// Propiedades en arrays
console.log('users.length', users.length);
// Uso de funciones en Arrays
users.push('midorima');
users.sort();
console.log('users', users);
