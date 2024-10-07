import { cn } from '@/lib/utils'
import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'
import { ButtonHTMLAttributes } from 'react'

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  dir: 'left' | 'right'
  arrowSize: number
  active: boolean
}

export default function ScrollArrowButton({
  dir,
  active,
  arrowSize,
  className,
  ...props
}: ArrowButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'absolute z-10 items-center justify-center from-gray-100 from-75% to-transparent',
        dir === 'left' ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l',
        active ? 'flex' : 'hidden',
        className,
      )}
    >
      <div className="flex items-center justify-center rounded-full border border-primary bg-white p-1 text-strong">
        {dir === 'left' ? (
          <CaretLeft size={arrowSize} />
        ) : (
          <CaretRight size={arrowSize} />
        )}
      </div>
    </button>
  )
}
