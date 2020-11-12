enum PictureOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {
  // Propiedades
  public id: number
  public title: string
  public orientation: PictureOrientation

  public constructor (id: number, title: string, orientation: PictureOrientation) {
    this.id = id
    this.title = title
    this.orientation = orientation
  }

  // Comportamiento
  public toString () {
    return `
      [
        id: ${this.id}
        title: ${this.title}
        orientation: ${this.orientation}
      ]
    `
  }
}

class Album {
  public id: number
  public title: string
  public pictures: Picture[]

  public constructor (id: number, title: string) {
    this.id = id
    this.title = title
    this.pictures = []
  }

  public addPicture (picture: Picture) {
    this.pictures.push(picture)
  }
}

const album: Album = new Album(1, 'Personal Picture')
const picture: Picture = new Picture(1, 'PLatzi Session', PictureOrientation.Landscape)
const otherPicture: Picture = new Picture(2, 'Summer', PictureOrientation.Portrait)

album.addPicture(picture)
album.addPicture(otherPicture)

console.log('album', album)

// Accediendo a los miembros públicos
picture.id = 100 // public
picture.title = 'Another title' // public
album.title = 'Personal Activities'

console.log('album', album)

export {}
