interface HeaderProps {
  children?: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
  return <div className="flex h-14 items-center">{children}</div>
}
