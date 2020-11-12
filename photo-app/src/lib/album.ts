import Item from './item'
import Picture from './picture'

export default class Album extends Item {
  private picture: Picture[]

  public constructor(id: number, title: string) {
    super(id, title)
    this.picture = []
  }

  public addPicture (picture: Picture) {
    this.picture.push(picture)
  }
}
