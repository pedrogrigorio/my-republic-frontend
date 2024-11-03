export interface BaseAdvertisement {
  id: number
  title: string
  price: number
  imgSrc: string
  city: {
    name: string
  }
  state: {
    uf: string
  }
}
