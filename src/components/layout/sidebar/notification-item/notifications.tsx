import dayjs from '@/lib/dayjs'

import { Notification } from '@/types/notification'
import { Bell } from '@phosphor-icons/react/dist/ssr'

interface NotificationsProps {
  notifications: Notification[]
}

export default function Notifications({ notifications }: NotificationsProps) {
  return (
    <ul>
      {notifications.map((notification, index) => (
        <li key={notification.id}>
          {/* Notificação */}
          <div className="flex gap-3 px-6 py-4 hover:bg-gray-50">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-gray-300">
              <Bell size={20} />
            </div>

            <div className="flex-1 overflow-hidden text-sm text-primary">
              <p>{notification.message}</p>

              <p className="mt-1 text-xs">
                {dayjs(notification.createdAt).format(
                  'D[ de ]MMMM[ de ]YYYY[ · ]h[:]mm A',
                )}
              </p>
            </div>

            {/* Bolinha de notificação nova */}
            <div
              className={`mt-1 h-3 w-3 rounded-full bg-badge ${notification.isRead && 'opacity-0'}`}
            />
          </div>

          {/* Divisor */}
          {index !== notifications.length - 1 && (
            <div className="h-[1px] w-full bg-divisor" />
          )}
        </li>
      ))}
    </ul>
  )
}
