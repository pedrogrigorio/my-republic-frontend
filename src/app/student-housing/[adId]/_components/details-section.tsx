import { ReactNode } from 'react'

interface DetailsSectionProps {
  title: string
  children: ReactNode
}

export default function DetailsSection({
  title,
  children,
}: DetailsSectionProps) {
  return (
    <section className="flex flex-col gap-4 pb-8 pt-5">
      <div className="flex flex-col">
        <h3 className="font-bold">{title}</h3>
        <div className="h-1 w-16 bg-gray-800" />
      </div>
      {children}
    </section>
  )
}
