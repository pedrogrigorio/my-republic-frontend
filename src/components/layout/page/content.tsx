import { cn } from '@/lib/utils'

interface ContentProps {
  children: React.ReactNode
  className?: string
}

export default function Content({ children, className }: ContentProps) {
  return (
    <div className={cn('mt-10 flex flex-col text-strong', className)}>
      {children}
    </div>
  )
}
