import User from './lib/user'
import Album from './lib/album'
import Picture from './lib/picture'
import PhotoOrientation from './enums/photo-orientation'

const user = new User(1, 'aomine', 'omar', true)
const album = new Album(10, 'Platzi Pictures')
const picture = new Picture(1, 'TypeScript Course', '2020-03', PhotoOrientation.Landscape)

// Creamos relaciones
user.addAlbum(album)
album.addPicture(picture)
console.log('user', user)

user.removeAlbum(album)
console.log('user', user)
