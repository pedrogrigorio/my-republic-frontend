import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Bell, Checks } from '@phosphor-icons/react/dist/ssr'
import {
  notifications,
  notificationsGroupedByDate,
} from '@/data/NotificationData'
import Image from 'next/image'
import { useEffect } from 'react'

interface NotificationItemProps {
  sidebarIsOpen: boolean
}

interface Notification {
  id: number
  img_url: string | null
  type: number
  user: string | null
  ad: string
  body: string
  date: string
  isRead: boolean
}

export default function NotificationItem({
  sidebarIsOpen,
}: NotificationItemProps) {
  useEffect(() => {
    console.log(notifications)
    console.log(notificationsGroupedByDate)
  }, [])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex h-12 rounded-xl px-3 hover:text-black">
          <div className="flex items-center">
            <div className="flex w-8 items-center justify-center">
              <Bell size={24} />
            </div>
            <span
              className={`${!sidebarIsOpen ? 'w-0 opacity-0' : 'opacity-100'} flex-1 whitespace-nowrap pl-3 transition-opacity duration-200`}
            >
              Notificações
            </span>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent
        side="right"
        sideOffset={24}
        className="flex h-[650px] w-[572px] translate-y-16 flex-col overflow-hidden rounded-3xl p-0"
      >
        <div className="px-6 pb-4 pt-8 font-medium text-strong">
          <h3>Notificações</h3>
        </div>
        <div className="h-[1px] w-full bg-gray-200"></div>
        <div className="scrollbar-thin overflow-y-auto pt-4">
          <div className="flex justify-end px-6">
            <Button variant="outline" className="flex gap-2 text-strong">
              <Checks size={24} />
              Marcar tudo como lido
            </Button>
          </div>

          <div className="mt-4">
            {notificationsGroupedByDate.map((group, index) => (
              <div key={group.date}>
                {index !== 0 && (
                  <div className="flex items-center gap-2">
                    <div className="h-[1px] w-full bg-gray-200" />
                    <span className="whitespace-nowrap text-xs">
                      {group.date}
                    </span>
                    <div className="h-[1px] w-full bg-gray-200" />
                  </div>
                )}
                <ul>
                  {group.notifications.map(
                    (notification: Notification, index: number) => (
                      <li key={notification.id}>
                        <div className="flex gap-2 px-6 py-4 hover:bg-gray-50">
                          {notification.img_url ? (
                            <Image
                              src={notification.img_url}
                              alt=""
                              width={32}
                              height={32}
                              className="h-8 w-8 rounded-full border-[1px] border-gray-300"
                            />
                          ) : (
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-gray-300">
                              <Bell size={20} />
                            </div>
                          )}

                          <div className="flex-1 overflow-hidden text-sm text-primary">
                            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                              <span className="font-normal text-strong">
                                João da silva{' '}
                              </span>
                              <span>
                                te enviou uma mensagem sobre o anúncio{' '}
                              </span>
                              <span className="font-normal text-strong">
                                República.
                              </span>
                            </div>
                            <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                              {notification.body}
                            </p>
                            <p className="mt-1 text-xs">
                              7 de Março de 2023 · 12:12 AM
                            </p>
                          </div>

                          <div className="mt-1 h-3 w-3 rounded-full bg-badge" />
                        </div>

                        {index !== group.notifications.length - 1 && (
                          <div className="h-[1px] w-full bg-gray-200" />
                        )}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
