import { NotificationType } from './notification-type'

export interface Notification {
  id: number
  message: string
  isRead: boolean
  type: NotificationType
  createdAt: Date
  recipient: {
    id: number
    name: string
  }
}

export interface NotificationGroup {
  date: string
  notifications: Notification[]
}
