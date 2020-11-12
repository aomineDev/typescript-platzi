// Función para mostar una fotografia
enum PictureOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

interface Picture {
  title: string,
  date: string,
  orientation: PictureOrientation
}

function showPicture (picture: { title: string, date: string, orientation: PictureOrientation }) {
  console.log(`
    [title: ${picture.title},
    date: ${picture.date},
    orientation: ${picture.orientation}]
  `)
}

function otherShowPicture (picture: Picture) {
  console.log(`
    [title: ${picture.title},
    date: ${picture.date},
    orientation: ${picture.orientation}]
  `)
}

let myPic = {
  title: 'Test Title',
  date: '2020-03',
  orientation: PictureOrientation.Landscape
}

showPicture(myPic)
otherShowPicture(myPic)

interface PictureConfig {
  title?: string,
  date?: string,
  orientation?: PictureOrientation
}

function generatePicture (config: PictureConfig) {
  const pic = {
    title: 'Default',
    date: '2020-03'
  }

  if (config.title) {
    pic.title = config.title
  }

  if (config.date) {
    pic.date = config.date
  }

  return pic
}

let picture = generatePicture({})
console.log(picture)
picture = generatePicture({ title: 'Travel pic' })
console.log(picture)
picture = generatePicture({ title: 'Travel pic', date: '2021-05' })
console.log(picture)

// Interfaz: usuario
interface User {
  readonly id: number, // solo lectura
  username: string,
  isPro: boolean
}

let user: User
user = { id: 10, username: 'aomine', isPro: true }
console.log('user', user)
user.username = 'omar'
// user.id = 20 // Error
console.log('user', user)

export {}
