enum PictureOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

// Superclase
abstract class Item {
  protected _id: number
  protected _title: string

  public constructor (id: number, title: string) {
    this._id = id
    this._title = title
  }

  public get id (): number {
    return this._id
  }

  public set id (id: number) {
    this._id = id
  }
  
  public get title (): string {
    return this._title
  }
  
  public set title (title: string) {
    this._title = title;
  }
}

class Picture extends Item {
  // Propiedades
  private _orientation: PictureOrientation

  public constructor (id: number, title: string, orientation: PictureOrientation) {
    super(id, title)
    this._orientation = orientation
  }
  
  public get orientation (): PictureOrientation {
    return this._orientation
  }
  
  public set orientation (orientation: PictureOrientation) {
    this._orientation = orientation;
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

class Album extends Item {
  private pictures: Picture[]

  public constructor (id: number, title: string) {
    super(id, title)
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
picture.id = 100 // set id(100)
picture.title = 'Another title' // get title()
album.title = 'Personal Activities' // get title()

console.log('album', album)

// const item = new Item(1, 'Test title') // Error

export {}
