import SignUpModal from '@/components/modals/sign-up-modal'
import LoginModal from '@/components/modals/login-modal'
import persona from '@/assets/img/persona.png'
import Image from 'next/image'

import { useSession } from '@/hooks/useSession'
import { SignOut } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/shadcnui/button'
import { cn } from '@/lib/utils'
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenu,
} from '@/components/shadcnui/dropdown-menu'
import { logout } from '@/lib/auth'

interface UserSectionProps {
  sidebarIsOpen: boolean
}

export default function UserSection({ sidebarIsOpen }: UserSectionProps) {
  const { session, refreshSession } = useSession()

  const handleLogout = async () => {
    await logout()
    await refreshSession()
  }

  if (session) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 hover:bg-gray-50">
            <Image
              src={persona}
              width={32}
              height={32}
              className="h-8 w-8 rounded-full border-[1px] border-gray-300"
              alt="Profile image"
            />
            <h3
              className={cn(
                'whitespace-nowrap text-sm font-semibold text-gray-800 opacity-100 transition-opacity duration-200',
                !sidebarIsOpen && 'pointer-events-none opacity-0',
              )}
            >
              John Doe
            </h3>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side={sidebarIsOpen ? 'top' : 'right'}
          className="max-h-[--radix-dropdown-menu-content-available-height] w-[--radix-dropdown-menu-trigger-width]"
        >
          <DropdownMenuGroup>
            <DropdownMenuItem asChild onClick={handleLogout}>
              <div className="flex gap-3 text-gray-800">
                <SignOut size={24} />
                <span>Sair</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <SignUpModal>
        <Button className="bg-button-secondary hover:bg-button-secondary-hover">
          Cadastrar
        </Button>
      </SignUpModal>

      <LoginModal onLoginSuccess={async () => await refreshSession()}>
        <Button variant="outline">Entrar</Button>
      </LoginModal>
    </div>
  )
}
