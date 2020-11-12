// <type>
var randomName;
randomName = 'aomine';
// Tenemos una cadena, TS confía en mi!
var message = randomName.length > 5 ? "Welcome " + randomName : 'Username is too short';
console.log('message', message);
// as
var usernameWithId = 'aomine 1';
// Como obtener el random name?
randomName = usernameWithId.substr(0, 6);
console.log('Username only', randomName);
