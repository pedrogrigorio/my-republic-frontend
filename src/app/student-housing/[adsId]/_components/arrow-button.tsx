import { cn } from '@/lib/utils'
import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'
import { ButtonHTMLAttributes } from 'react'

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  dir: 'left' | 'right'
}

export default function ArrowButton({
  dir,
  className,
  ...props
}: ArrowButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'absolute -bottom-8 z-10 h-[26px] items-center justify-center bg-gradient-to-l from-gray-100 from-75% to-transparent',
        className,
      )}
    >
      {dir === 'left' && (
        <div className="flex h-5 w-5 items-center justify-center rounded-full border border-primary bg-white text-strong">
          <CaretLeft size={16} />
        </div>
      )}

      {dir === 'right' && (
        <div className="flex h-5 w-5 items-center justify-center rounded-full border border-primary bg-white text-strong">
          <CaretRight size={16} />
        </div>
      )}
    </button>
  )
}
