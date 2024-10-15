'use client'

import NotificationItem from './notification-item'
import ToggleButton from './toggle-button'
import UserSection from './user-section'
import LogoSection from './logo-section'
import MenuSection from './menu-section'

import { mainMenu, systemMenu } from '@/data/sidebar-data'
import { useState } from 'react'
import { useUser } from '@/context/user-context'
import { cn } from '@/lib/utils'

export default function Sidebar() {
  const { user: authenticatedUser } = useUser()
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div
      className={cn(
        'relative w-80 bg-white p-4 transition-all duration-500',
        !isOpen && 'w-[88px]',
      )}
    >
      {/* Botão de fechar e abrir sidebar */}
      <ToggleButton sidebarIsOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

      <div className="flex h-full w-full flex-col overflow-hidden">
        {/* Logo da aplicação */}
        <LogoSection sidebarIsOpen={isOpen} />

        {/* Menus */}
        <div className="mb-8 mt-20 flex-1 overflow-y-auto overflow-x-hidden scrollbar scrollbar-track-transparent scrollbar-thumb-gray-300 scrollbar-corner-transparent">
          <MenuSection
            title="PRINCIPAL"
            sidebarIsOpen={isOpen}
            menu={mainMenu}
          />

          {authenticatedUser && (
            <MenuSection
              title="SISTEMA"
              sidebarIsOpen={isOpen}
              menu={systemMenu}
              className="mt-6"
            >
              <li className="cursor-pointer">
                <NotificationItem sidebarIsOpen={isOpen} />
              </li>
            </MenuSection>
          )}
        </div>

        {/* Perfil */}
        <UserSection sidebarIsOpen={isOpen} />
      </div>
    </div>
  )
}
