import { ReactNode } from 'react'

interface HouseTagProps {
  children: ReactNode
  text: string
}

export default function HouseTag({ children, text }: HouseTagProps) {
  return (
    <div className="flex items-center gap-1 rounded-[4px] border border-primary bg-gray-100 px-2 py-1">
      <div className="flex items-center justify-center">{children}</div>
      <span className="text-xs font-medium">{text}</span>
    </div>
  )
}
