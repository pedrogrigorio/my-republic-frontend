interface ContentProps {
  children: React.ReactNode
}

export default function Content({ children }: ContentProps) {
  return <div className="mt-10 flex flex-col text-strong">{children}</div>
}
