'use client'

import Logo from '@/components/icons/Logo'
import { CaretLeft } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { useState } from 'react'
import persona from '@/assets/img/persona.png'
import { mainMenu, systemMenu } from '@/data/SidebarData'
import dynamic from 'next/dynamic'

const MenuItem = dynamic(() => import('./MenuItem'), { ssr: false })

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="relative flex w-80 flex-col bg-white px-6 py-4">
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

      {/* Logo da aplicação */}
      <div className="flex items-center gap-2">
        <Logo />
        <h1 className="text-xl font-bold text-logo">MyRepublic</h1>
      </div>

      {/* Menus */}
      <div className="mt-20 flex-1">
        {/* Menu principal */}
        <div className="font-medium">
          <span className="p-4 text-xs text-sidebarMenu">PRINCIPAL</span>
          <ul className="mt-2 flex flex-col gap-3 text-sm text-sidebarMenu">
            {mainMenu.map((item) => (
              <li key={item.id}>
                <MenuItem
                  icon={item.icon}
                  label={item.label}
                  path={item.path}
                  submenu={item.submenu}
                  redirectTo={item.redirectTo}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Menu de Sistema */}
        <div className="mt-6 flex-1 font-medium">
          <span className="p-4 text-xs text-sidebarMenu">SISTEMA</span>
          <ul className="mt-2 flex flex-col gap-3 text-sm text-sidebarMenu">
            {systemMenu.map((item) => (
              <li key={item.id}>
                <MenuItem
                  icon={item.icon}
                  label={item.label}
                  path={item.path}
                  submenu={item.submenu}
                  redirectTo={item.redirectTo}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Perfil */}
      <div className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-2 hover:bg-gray-50">
        <Image
          src={persona}
          width={32}
          height={32}
          className="rounded-full border-[1px] border-gray-300"
          alt=""
        />
        <h3 className="text-sm font-semibold text-gray-800">Pedro Henrique</h3>
      </div>
    </div>
  )
}
