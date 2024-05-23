'use client'

import Logo from '@/components/icons/Logo'
import { CaretLeft } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { useState } from 'react'
import persona from '@/assets/img/persona.png'
import { mainMenu, systemMenu } from '@/data/SidebarData'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const MenuItem = dynamic(() => import('./MenuItem'), { ssr: false })

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div
      className={`relative bg-white px-6 py-4 ${isOpen ? 'w-80' : 'w-[104px]'} transition-all duration-500`}
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
        <Link
          href="/"
          className={`flex items-center gap-4 px-4 ${!isOpen && 'justify-center'}`}
        >
          <div className="flex min-h-8 min-w-8">
            <Logo />
          </div>
          <h1
            className={`whitespace-nowrap text-xl font-bold text-logo ${!isOpen && 'hidden'}`}
          >
            MyRepublic
          </h1>
        </Link>

        {/* Menus */}
        <div className="mt-20 flex-1">
          {/* Menu principal */}
          <div className={`${!isOpen && ''} flex flex-col gap-2 font-medium`}>
            <span
              className={`px-4 text-xs text-sidebarMenu transition-opacity duration-200 ${!isOpen ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
            >
              PRINCIPAL
            </span>
            <ul className="flex flex-col gap-3 text-sm text-sidebarMenu">
              {mainMenu.map((item) => (
                <li key={item.id} className={`${!isOpen && 'flex'}`}>
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
          <div
            className={`${!isOpen ? '' : 'gap-2'} mt-6 flex flex-col font-medium`}
          >
            <span
              className={`px-4 text-xs text-sidebarMenu transition-all duration-200 ${!isOpen ? 'pointer-events-none h-0 opacity-0' : 'h-4 opacity-100'}`}
            >
              SISTEMA
            </span>
            <ul className="flex flex-col gap-3 text-sm text-sidebarMenu">
              {systemMenu.map((item) => (
                <li key={item.id} className={`${!isOpen && 'flex'}`}>
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
          <h3
            className={`whitespace-nowrap text-sm font-semibold text-gray-800 ${!isOpen && 'hidden'}`}
          >
            Pedro Henrique
          </h3>
        </div>
      </div>
    </div>
  )
}
