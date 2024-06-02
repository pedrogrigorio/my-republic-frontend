import { StaticImageData } from 'next/image'

export interface Advertisement {
  id: number
  img_url: string | StaticImageData
  title: string
  locale: string
  price: number
  isActive: boolean
}
