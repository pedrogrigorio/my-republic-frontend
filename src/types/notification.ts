import { StaticImageData } from 'next/image'

export interface Notification {
  id: number
  img_url: string | null | StaticImageData
  type: number
  user: string | null
  title: string
  ad: string
  body: string
  date: string
  isRead: boolean
}

export interface NotificationGroup {
  date: string
  notifications: Notification[]
}
