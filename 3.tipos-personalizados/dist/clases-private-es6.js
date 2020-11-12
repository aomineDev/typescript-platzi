"use strict";
// TypeScript 3.8
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _id, _title, _orientation, _id_1, _title_1, _pictures;
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
        // Propiedades
        _id.set(this, void 0);
        _title.set(this, void 0);
        _orientation.set(this, void 0);
        __classPrivateFieldSet(this, _id, id);
        __classPrivateFieldSet(this, _title, title);
        __classPrivateFieldSet(this, _orientation, orientation);
    }
    // Comportamiento
    Picture.prototype.toString = function () {
        return "\n      [\n        id: " + __classPrivateFieldGet(this, _id) + "\n        title: " + __classPrivateFieldGet(this, _title) + "\n        orientation: " + __classPrivateFieldGet(this, _orientation) + "\n      ]\n    ";
    };
    return Picture;
}());
_id = new WeakMap(), _title = new WeakMap(), _orientation = new WeakMap();
var Album = /** @class */ (function () {
    function Album(id, title) {
        _id_1.set(this, void 0);
        _title_1.set(this, void 0);
        _pictures.set(this, void 0);
        __classPrivateFieldSet(this, _id_1, id);
        __classPrivateFieldSet(this, _title_1, title);
        __classPrivateFieldSet(this, _pictures, []);
    }
    Album.prototype.addPicture = function (picture) {
        __classPrivateFieldGet(this, _pictures).push(picture);
    };
    return Album;
}());
_id_1 = new WeakMap(), _title_1 = new WeakMap(), _pictures = new WeakMap();
var album = new Album(1, 'Personal Picture');
var picture = new Picture(1, 'PLatzi Session', PictureOrientation.Landscape);
var otherPicture = new Picture(2, 'Summer', PictureOrientation.Portrait);
album.addPicture(picture);
album.addPicture(otherPicture);
console.log('album', album);
