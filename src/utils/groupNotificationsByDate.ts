import { Notification } from '@/types/notification'

export const groupNotificationsByDate = (notifications: Notification[]) => {
  const grouped = notifications.reduce<Record<string, Notification[]>>(
    (acc, notification) => {
      const date = notification.date.split(' ')[0]
      if (!acc[date]) {
        acc[date] = []
      }
      acc[date].push(notification)
      return acc
    },
    {},
  )

  return Object.keys(grouped).map((date) => ({
    date,
    notifications: grouped[date],
  }))
}
