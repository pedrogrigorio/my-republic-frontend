import Logo from '@/components/icons/logo'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface LogoSectionProps {
  sidebarIsOpen: boolean
}
export default function LogoSection({ sidebarIsOpen }: LogoSectionProps) {
  return (
    <Link href="/" className="flex items-center px-3">
      <div className="h-8 w-8">
        <Logo />
      </div>
      <h1
        className={cn(
          'whitespace-nowrap pl-3 text-xl font-bold text-logo opacity-100 transition-opacity duration-200',
          !sidebarIsOpen && 'pointer-events-none opacity-0',
        )}
      >
        MyRepublic
      </h1>
    </Link>
  )
}
