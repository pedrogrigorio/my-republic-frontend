'use client'

import Logo from '@/components/icons/Logo'
import { CaretLeft } from '@phosphor-icons/react/dist/ssr'
import { useEffect, useState } from 'react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])

  return (
    <div className="relative h-full w-64 bg-white px-6 py-4">
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
      <div className="flex items-center gap-2">
        <Logo />
        <h1 className="text-logo text-xl font-bold">MyRepublic</h1>
      </div>
    </div>
  )
}
