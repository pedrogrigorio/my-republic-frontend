import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Bell } from '@phosphor-icons/react/dist/ssr'

interface NotificationItemProps {
  sidebarIsOpen: boolean
}

export default function NotificationItem({
  sidebarIsOpen,
}: NotificationItemProps) {
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
      <PopoverContent side="right" sideOffset={24} className="h-[500px] w-96">
        <span>Notificações</span>
      </PopoverContent>
    </Popover>
  )
}
