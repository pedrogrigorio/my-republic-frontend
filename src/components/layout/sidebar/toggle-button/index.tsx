import { ButtonHTMLAttributes } from 'react'
import { CaretLeft } from '@phosphor-icons/react/dist/ssr'
import { cn } from '@/lib/utils'

interface ToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  sidebarIsOpen: boolean
}

export default function ToggleButton({
  sidebarIsOpen,
  ...props
}: ToggleButtonProps) {
  return (
    <button
      className="absolute right-0 top-12 z-10 flex h-11 w-11 translate-x-1/2 items-center justify-center rounded-full bg-gray-100"
      {...props}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-black to-gray-400">
        <CaretLeft
          color="#fff"
          width={24}
          height={24}
          className={cn(
            'rotate-0 transition duration-500',
            !sidebarIsOpen && '-rotate-180',
          )}
        />
      </div>
    </button>
  )
}
