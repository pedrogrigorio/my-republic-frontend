'use client'

import Logo from '@/components/icons/Logo'
import { House } from '@phosphor-icons/react'
import {
  CaretLeft,
  CaretUp,
  MagnifyingGlass,
  Megaphone,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import persona from '@/assets/img/persona.png'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])

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

      {/* Menu principal */}
      <div className="mt-20 flex-1 font-medium">
        <span className="text-sidebarMenu p-4 text-xs">Principal</span>
        <ul className="text-sidebarMenu mt-2 flex flex-col gap-3 text-sm">
          <li className="flex h-10 items-center gap-2 rounded-xl p-4 hover:text-black ">
            <House width={20} height={20} />
            Início
          </li>
          <li className="flex h-10 items-center gap-2 rounded-xl bg-gray-50 p-4 hover:text-black ">
            <Megaphone width={20} height={20} />
            Meus anúncios
          </li>
          <li className="flex h-10 items-center justify-between rounded-xl p-4 hover:text-black ">
            <div className="flex flex-1 gap-2">
              <MagnifyingGlass width={20} height={20} />
              Buscar repúblicas
            </div>

            <CaretUp width={16} height={16} />
          </li>
        </ul>
      </div>

      {/* Perfil */}
      <div className="flex cursor-pointer items-center gap-4 rounded-xl p-4 hover:bg-gray-50">
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
