interface CardProps {
  title: string
  body: string
  icon: JSX.Element
  className?: string
}

export default function Card({ icon, title, body, className }: CardProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex h-80 w-72 flex-col items-center justify-start gap-4 rounded-xl bg-white py-6 text-center shadow-custom">
        {icon}
        <span className="px-6 font-medium">{title}</span>
        <p className="px-8">{body}</p>
      </div>
    </div>
  )
}
