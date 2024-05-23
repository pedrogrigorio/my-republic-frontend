import { CaretUp } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

interface SubmenuItem {
  id: string
  label: string
  path: string
}

interface MenuItemProps {
  label: string
  icon: ReactNode
  path: string
  submenu?: SubmenuItem[]
  redirectTo?: string
  sidebarIsOpen: boolean
}

export default function MenuItem(item: MenuItemProps) {
  const [isSubmenuActive, setIsSubmenuActive] = useState(false)

  const pathname = usePathname()
  const { sidebarIsOpen } = item

  useEffect(() => {
    setIsSubmenuActive(false)
  }, [sidebarIsOpen])

  const isActive = () => {
    if (item.path === '/') {
      // Check for exact match for Home
      return pathname === item.path
    } else {
      // Check for exact match or subpath match for other items
      return pathname === item.path || pathname.startsWith(`${item.path}/`)
    }
  }

  const active = isActive()

  return (
    <div>
      {/* Item principal */}
      <div
        className={`flex h-10 items-center justify-between rounded-xl px-4 hover:text-black ${active ? 'bg-gray-50' : ''}`}
      >
        <Link
          href={item.redirectTo ? item.redirectTo : item.path}
          className={`flex h-full items-center gap-4 ${active && 'text-black'}`}
        >
          {item.icon}
          <span
            className={`${!sidebarIsOpen ? 'w-0 opacity-0' : 'opacity-100'} flex-1 whitespace-nowrap transition-opacity duration-200`}
          >
            {item.label}
          </span>
        </Link>

        <button
          onClick={() => setIsSubmenuActive(!isSubmenuActive)}
          className={`${isSubmenuActive ? 'rotate-180 text-black' : 'rotate-0'} ${!sidebarIsOpen && 'hidden'} transition duration-500`}
        >
          {item.submenu && <CaretUp width={16} height={16} />}
        </button>
      </div>

      {/* Submenu */}
      {sidebarIsOpen && (
        <div
          className={`transform overflow-hidden transition-all duration-500 ${isSubmenuActive ? 'max-h-32' : 'max-h-0'}`}
        >
          <div className="mt-2 flex gap-2 px-4">
            <div className="flex w-5 justify-center">
              <div className="w-1 rounded-lg bg-gray-200"></div>
            </div>

            <ul className="flex flex-1 flex-col gap-1">
              {item.submenu?.map((subitem) => (
                <li key={subitem.id} className="h-8">
                  <Link
                    href={subitem.path}
                    className={`flex h-full items-center rounded-xl px-4 text-xs hover:text-black ${pathname.includes(subitem.path) ? 'bg-gray-50' : ''}`}
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
