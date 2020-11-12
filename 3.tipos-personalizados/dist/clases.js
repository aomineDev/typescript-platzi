"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 0] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 1] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 2] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 3] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
var Picture = /** @class */ (function () {
    function Picture(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    // Comportamiento
    Picture.prototype.toString = function () {
        return "\n      [\n        id: " + this.id + "\n        title: " + this.title + "\n        orientation: " + this.orientation + "\n      ]\n    ";
    };
    return Picture;
}());
var Album = /** @class */ (function () {
    function Album(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    Album.prototype.addPicture = function (picture) {
        this.pictures.push(picture);
    };
    return Album;
}());
var album = new Album(1, 'Personal Picture');
var picture = new Picture(1, 'PLatzi Session', PictureOrientation.Landscape);
var otherPicture = new Picture(2, 'Summer', PictureOrientation.Portrait);
album.addPicture(picture);
album.addPicture(otherPicture);
console.log('album', album);
// Accediendo a los miembros públicos
picture.id = 100; // public
picture.title = 'Another title'; // public
album.title = 'Personal Activities';
console.log('album', album);
