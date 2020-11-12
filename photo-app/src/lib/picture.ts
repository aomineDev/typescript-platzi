import Item from './item'
import PhotoOrientation from '../enums/photo-orientation'

export default class Picture extends Item {
  public constructor (
    id: number,
    title: string,
    private date: string,
    private orientation: PhotoOrientation
  ) {
    super(id, title)
  }

  public toString (): string {
    return `[
      id: ${this.id},
      title: ${this.title}
      orientation: ${this.orientation}
    ]`
  }
}
