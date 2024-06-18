import MenuItem from './menu-item'
import { IMenuItem } from '@/types/sidebar'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface MenuSectionProps {
  sidebarIsOpen: boolean
  title: string
  menu?: IMenuItem[]
  children?: ReactNode
  className?: string
}

export default function MenuSection({
  sidebarIsOpen,
  title,
  menu,
  children,
  className,
}: MenuSectionProps) {
  return (
    <div className={cn('flex flex-col font-medium', className)}>
      <span
        className={cn(
          'h-4 px-4 text-xs text-sidebar opacity-100 transition-opacity duration-200',
          !sidebarIsOpen && 'pointer-events-none opacity-0',
        )}
      >
        {title}
      </span>
      <ul className="flex flex-col gap-3 text-sm text-sidebar">
        {children}
        {menu?.map((item) => (
          <li key={item.id}>
            <MenuItem item={item} sidebarIsOpen={sidebarIsOpen} />
          </li>
        ))}
      </ul>
    </div>
  )
}
