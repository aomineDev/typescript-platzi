"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Función para mostar una fotografia
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 0] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 1] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 2] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 3] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
function showPicture(picture) {
    console.log("\n    [title: " + picture.title + ",\n    date: " + picture.date + ",\n    orientation: " + picture.orientation + "]\n  ");
}
function otherShowPicture(picture) {
    console.log("\n    [title: " + picture.title + ",\n    date: " + picture.date + ",\n    orientation: " + picture.orientation + "]\n  ");
}
var myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PictureOrientation.Landscape
};
showPicture(myPic);
otherShowPicture(myPic);
function generatePicture(config) {
    var pic = {
        title: 'Default',
        date: '2020-03'
    };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = generatePicture({});
console.log(picture);
picture = generatePicture({ title: 'Travel pic' });
console.log(picture);
picture = generatePicture({ title: 'Travel pic', date: '2021-05' });
console.log(picture);
var user;
user = { id: 10, username: 'aomine', isPro: true };
console.log('user', user);
user.username = 'omar';
// user.id = 20 // Error
console.log('user', user);
