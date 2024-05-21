import { CaretUp } from '@phosphor-icons/react/dist/ssr'
import { ReactNode, useState } from 'react'

interface SubmenuItem {
  id: string
  label: string
  path: string
}

interface MenuItemProps {
  label: string
  icon: ReactNode
  path?: string
  submenu?: SubmenuItem[]
}

export default function MenuItem(item: MenuItemProps) {
  const [isSubmenuActive, setIsSubmenuActive] = useState(false)

  return (
    <div>
      {/* Item principal */}
      <div className="flex h-10 items-center justify-between rounded-xl px-4 hover:text-black">
        <div className="flex flex-1 gap-2">
          {item.icon}
          {item.label}
        </div>

        <button
          onClick={() => setIsSubmenuActive(!isSubmenuActive)}
          className={`${isSubmenuActive ? 'rotate-180 text-black' : 'rotate-0'} transition duration-500`}
        >
          {item.submenu && <CaretUp width={16} height={16} />}
        </button>
      </div>

      {/* Submenu */}
      <div
        className={`transform overflow-hidden transition-all duration-500 ${isSubmenuActive ? 'max-h-32' : 'max-h-0'}`}
      >
        <div className="mt-2 flex gap-2 px-4">
          <div className="flex w-5 justify-center">
            <div className="w-1 rounded-lg bg-gray-200"></div>
          </div>

          <ul className="flex-1">
            {item.submenu?.map((subitem) => (
              <li
                key={subitem.id}
                className="mt-1 rounded-xl px-4 py-2 text-xs hover:text-black"
              >
                {subitem.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
