// Explicito
function showInfo(user) {
    console.log('User Info', user.id, user.name, user.firstName);
}
showInfo({ id: 1, name: 'aomine', firstName: 'omar' });
// Inplicito
function showFormatedInfo(user) {
    console.log('User Info', "\n    id: " + user.id + "\n    username: " + user.name + "\n    firstName: " + user.firstName + "\n  ");
}
showFormatedInfo({ id: 1, name: 'aomine', firstName: 'omar' });
// Tipo Void como tipo de variable
var unusable;
unusable = null;
unusable = undefined;
