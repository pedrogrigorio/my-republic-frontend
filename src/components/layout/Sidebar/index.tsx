'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import Logo from '@/components/icons/Logo'
import { CaretLeft, SignOut } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { useState } from 'react'
import persona from '@/assets/img/persona.png'
import { mainMenu, settingsMenu } from '@/data/SidebarData'
// import dynamic from 'next/dynamic'
import Link from 'next/link'
import MenuItem from './MenuItem'
import NotificationItem from './NotificationItem'

// const MenuItem = dynamic(() => import('./MenuItem'), { ssr: true })

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div
      className={`relative bg-white p-4 transition-all duration-500 ${isOpen ? 'w-80' : 'w-[88px]'}`}
    >
      {/* Botão de fechar sidebar */}
      <button
        className="absolute right-0 top-12 flex h-11 w-11 translate-x-1/2 items-center justify-center rounded-full bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-black to-gray-400 ">
          <CaretLeft
            className={`${isOpen ? 'rotate-0' : 'rotate-180'} transition duration-500`}
            color="#fff"
            width={24}
            height={24}
          />
        </div>
      </button>

      <div className="flex h-full w-full flex-col overflow-hidden">
        {/* Logo da aplicação */}
        <Link href="/" className="flex items-center px-3">
          <div className="h-8 w-8">
            <Logo />
          </div>
          <h1
            className={`whitespace-nowrap pl-3 text-xl font-bold text-logo transition-opacity duration-200 ${!isOpen ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
          >
            MyRepublic
          </h1>
        </Link>

        {/* Menus */}
        <div className="mt-20 flex-1">
          {/* Menu principal */}
          <div className="font-medium">
            <span
              className={`h-4 px-4 text-xs text-sidebar transition-opacity duration-200 ${!isOpen ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
            >
              PRINCIPAL
            </span>
            <ul className="flex flex-col gap-3 text-sm text-sidebar">
              {mainMenu.map((item) => (
                <li key={item.id}>
                  <MenuItem
                    icon={item.icon}
                    label={item.label}
                    path={item.path}
                    submenu={item.submenu}
                    redirectTo={item.redirectTo}
                    sidebarIsOpen={isOpen}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Menu de Sistema */}
          <div className="mt-6 flex flex-col font-medium">
            <span
              className={`px-4 text-xs text-sidebar transition-all duration-200 ${!isOpen ? 'pointer-events-none h-0 opacity-0' : 'h-4 opacity-100'}`}
            >
              SISTEMA
            </span>
            <ul className="flex flex-col gap-3 text-sm text-sidebar">
              <li className="cursor-pointer">
                <NotificationItem sidebarIsOpen={isOpen} />
              </li>
              <li>
                <MenuItem
                  icon={settingsMenu.icon}
                  label={settingsMenu.label}
                  path={settingsMenu.path}
                  submenu={settingsMenu.submenu}
                  redirectTo={settingsMenu.redirectTo}
                  sidebarIsOpen={isOpen}
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Perfil */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 hover:bg-gray-50">
              <Image
                src={persona}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full border-[1px] border-gray-300"
                alt="Profile image"
              />
              <h3
                className={`whitespace-nowrap text-sm font-semibold text-gray-800 transition-opacity duration-200 ${!isOpen ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
              >
                John Doe
              </h3>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side={isOpen ? 'top' : 'right'}
            className="max-h-[--radix-dropdown-menu-content-available-height] w-[--radix-dropdown-menu-trigger-width]"
          >
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <div className="flex gap-3 text-gray-800">
                  <SignOut size={24} />
                  <span>Sair</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
