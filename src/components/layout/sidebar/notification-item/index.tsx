import Notifications from './notifications'
import dayjs from '@/lib/dayjs'

import { Bell, Checks } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/shadcnui/button'
import { cn } from '@/lib/utils'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/shadcnui/popover'
import { groupNotificationsByDate } from '@/utils/groupNotificationsByDate'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import {
  getAllNotifications,
  markAllAsRead,
} from '@/services/notifications-service'

interface NotificationItemProps {
  sidebarIsOpen: boolean
}

export default function NotificationItem({
  sidebarIsOpen,
}: NotificationItemProps) {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['get-notifications'],
    queryFn: getAllNotifications,
  })

  const onMarkAllAsRead = async () => {
    await markAllAsRead()
    queryClient.invalidateQueries({
      queryKey: ['get-notifications'],
    })
  }

  if (!data) return null

  const notificationsGroupedByDate = groupNotificationsByDate(data)
  const unreadNotifications = data.filter(
    (notification) => notification.isRead === false,
  )

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex h-12 rounded-xl px-3 hover:text-black">
          <div className="flex items-center">
            <div className="relative flex w-8 items-center justify-center">
              <Bell size={24} />
              {unreadNotifications.length > 0 && (
                <div className="absolute right-1 top-0 h-3 w-3 rounded-full bg-badge" />
              )}
            </div>
            <span
              className={cn(
                'flex-1 whitespace-nowrap pl-3 opacity-100 transition-opacity duration-200',
                !sidebarIsOpen && 'w-0 opacity-0',
              )}
            >
              Notificações
            </span>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent
        side="right"
        sideOffset={24}
        className="flex h-[65vh] w-[572px] translate-y-16 flex-col overflow-hidden rounded-3xl p-0"
      >
        {/* Título */}
        <div className="px-6 pb-4 pt-8 font-medium text-strong">
          <h3>Notificações</h3>
        </div>

        {/* Divisor */}
        <div className="h-[1px] w-full bg-divisor"></div>

        {/* Conteúdo */}
        <div className="overflow-y-auto pt-4 scrollbar-thin">
          {/* Botão */}
          <div className="flex justify-end px-6">
            <Button
              variant="outline"
              className="flex gap-2 text-strong"
              onClick={onMarkAllAsRead}
            >
              <Checks size={24} />
              Marcar tudo como lido
            </Button>
          </div>

          {/* Notificações */}
          <div className="mt-4">
            {notificationsGroupedByDate.map((group, index) => (
              <div key={group.date}>
                {/* Divisor com data */}
                {index !== 0 && (
                  <div className="flex items-center gap-2">
                    <div className="h-[1px] w-full bg-gray-200" />
                    <span className="whitespace-nowrap text-xs">
                      {dayjs(group.date).isSame(
                        dayjs().subtract(1, 'day').startOf('day'),
                        'day',
                      )
                        ? 'Ontem'
                        : dayjs(group.date).format('D[ de ]MMMM[ de ]YYYY')}
                    </span>
                    <div className="h-[1px] w-full bg-gray-200" />
                  </div>
                )}

                {/* Grupo de notificações */}
                <Notifications notifications={group.notifications} />
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
