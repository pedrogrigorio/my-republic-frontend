import { Notification } from '@/types/notification'
import { api } from '@/lib/axios'

export async function getAllNotifications() {
  const response = await api.get<Notification[]>('notifications')

  return response.data
}

export async function markAllAsRead() {
  await api.patch<Notification[]>('notifications/read-all')
}
