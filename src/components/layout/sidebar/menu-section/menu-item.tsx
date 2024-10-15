import useSubmenuState from '@/hooks/useSubmenuState'
import Link from 'next/link'

import { IMenuItem } from '@/types/sidebar'
import { CaretUp } from '@phosphor-icons/react/dist/ssr'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/shadcnui/dropdown-menu'
import { useUser } from '@/context/user-context'

interface MenuItemProps {
  item: IMenuItem
  sidebarIsOpen: boolean
}

export default function MenuItem({ item, sidebarIsOpen }: MenuItemProps) {
  const { user: authenticatedUser } = useUser()
  const { isSubmenuActive, isActive, pathname, toggleSubmenu } =
    useSubmenuState(item, sidebarIsOpen)

  return (
    <div>
      {/* Item principal */}
      <div className="relative flex h-12 items-center justify-between rounded-xl px-3 hover:text-black">
        {isActive && (
          <div className="absolute left-0 z-0 h-full w-full rounded-xl bg-gray-50"></div>
        )}

        {sidebarIsOpen || !item.submenu ? (
          <Link
            href={item.path}
            className={cn(
              'z-10 flex h-full items-center',
              isActive && 'text-black',
            )}
          >
            <div className="flex w-8 items-center justify-center">
              {item.icon}
            </div>
            <span
              className={cn(
                'flex-1 whitespace-nowrap pl-3 opacity-100 transition-opacity duration-200',
                !sidebarIsOpen && 'w-0 opacity-0',
              )}
            >
              {item.label}
            </span>
          </Link>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                className={cn(
                  'z-10 flex h-full items-center',
                  isActive && 'text-black',
                )}
              >
                <div className="flex w-8 items-center justify-center">
                  {item.icon}
                </div>
                <span
                  className={cn(
                    'flex-1 whitespace-nowrap pl-3 opacity-100 transition-opacity duration-200',
                    !sidebarIsOpen && 'w-0 opacity-0',
                  )}
                >
                  {item.label}
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="w-48">
              <DropdownMenuGroup>
                {item.submenu.map((subitem) => (
                  <DropdownMenuItem
                    key={subitem.id}
                    asChild
                    className={`${pathname.includes(subitem.path) && 'bg-gray-100'}`}
                  >
                    <Link
                      href={subitem.path}
                      className={`${pathname.includes(subitem.path) ? 'text-black' : 'text-sidebar'}`}
                    >
                      {subitem.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        <button
          onClick={toggleSubmenu}
          className={cn(
            'pl-3 transition duration-500',
            isSubmenuActive ? 'rotate-180 text-black' : 'rotate-0',
            !sidebarIsOpen && 'hidden',
          )}
        >
          {item.submenu && <CaretUp width={16} height={16} />}
        </button>
      </div>

      {/* Submenu */}
      {sidebarIsOpen && (
        <div
          className={cn(
            'transform overflow-hidden transition-all duration-500',
            isSubmenuActive ? 'max-h-32' : 'max-h-0',
          )}
        >
          <div className="mt-2 flex gap-2 px-4">
            <div className="flex w-5 justify-center">
              <div className="w-1 rounded-lg bg-gray-200"></div>
            </div>

            <ul className="flex flex-1 flex-col gap-1">
              {item.submenu
                ?.filter(
                  (subitem) =>
                    !subitem.protected ||
                    (subitem.protected && authenticatedUser),
                )
                .map((subitem) => (
                  <li key={subitem.id} className="h-8">
                    <Link
                      href={subitem.path}
                      className={cn(
                        'flex h-full items-center rounded-xl px-4 text-xs hover:text-black',
                        pathname.includes(subitem.path) && 'bg-gray-50',
                      )}
                    >
                      <span
                        className={`${pathname.includes(subitem.path) && 'text-black'}`}
                      >
                        {subitem.label}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
