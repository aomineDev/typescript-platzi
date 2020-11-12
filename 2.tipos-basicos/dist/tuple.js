var otherUser;
otherUser = [1, 'aomine'];
console.log('user data', otherUser);
console.log('username', otherUser[1]);
console.log('id', otherUser[0]);
// Tuplas con varios valores
var otherUserInfo;
otherUserInfo = [2, 'omar', true];
console.log('otherUserInfo', otherUserInfo);
// Arreglo de tuplas
var array;
array = [];
array.push([1, 'aomine']);
array.push([2, 'aomine']);
array.push([3, 'akashi']);
console.log('array', array);
// Uso de funciones array
// akashi -> seijuro
array[2][1] = 'seijuro';
console.log('array', array);
