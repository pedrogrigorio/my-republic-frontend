import { cn } from '@/lib/utils'
import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'
import { ButtonHTMLAttributes } from 'react'

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  dir: 'left' | 'right'
  active: boolean
}

export default function ArrowButton({
  dir,
  active,
  ...props
}: ArrowButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'absolute -bottom-8 z-10 flex h-[26px] items-center justify-center  from-gray-100 from-75% to-transparent',
        dir === 'left' ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l',
        active ? 'flex' : 'hidden',
      )}
    >
      <div className="flex h-5 w-5 items-center justify-center rounded-full border border-primary bg-white text-strong">
        {dir === 'left' ? <CaretLeft size={16} /> : <CaretRight size={16} />}
      </div>
    </button>
  )
}
