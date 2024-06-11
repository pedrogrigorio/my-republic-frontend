import { Notification } from '@/types'
import { Bell } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import dayjs from '@/lib/dayjs'

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
            {/* Icone ou imagem */}
            {notification.img_url ? (
              <Image
                src={notification.img_url}
                alt=""
                width={32}
                height={32}
                className="mt-1 h-8 w-8 rounded-full border-[1px] border-gray-300"
              />
            ) : (
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-gray-300">
                <Bell size={20} />
              </div>
            )}

            {/* Textos */}
            <div className="flex-1 overflow-hidden text-sm text-primary">
              {/* Título */}
              <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {notification.type === 0 && (
                  <>
                    <span className="font-normal text-strong">
                      {notification.user}
                    </span>
                    <span>{notification.title}</span>
                    <span className="font-normal text-strong">
                      {notification.ad}
                    </span>
                  </>
                )}
                {notification.type === 1 && (
                  <>
                    <span>{notification.title}</span>
                    <span className="font-normal text-strong">
                      {notification.ad}
                    </span>
                  </>
                )}
                {notification.type === 2 && (
                  <>
                    <span>{notification.title}</span>
                    <span className="font-normal text-strong">
                      {notification.ad}
                    </span>
                  </>
                )}
              </div>

              {/* Descrição */}
              <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                {notification.body}
              </p>

              {/* Data */}
              <p className="mt-1 text-xs">
                {dayjs(notification.date).format(
                  'D[ de ]MMMM[ de ]YYYY[ · ]h[:]m A',
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
