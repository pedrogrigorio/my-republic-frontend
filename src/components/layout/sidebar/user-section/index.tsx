import SignUpModal from '@/components/modals/sign-up-modal'
import LoginModal from '@/components/modals/login-modal'

import { getUserBySession } from '@/services/user-service'
import { useQuery } from '@tanstack/react-query'
import { Session } from '@/types/session'
import { SignOut } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/shadcnui/button'
import { logout } from '@/lib/auth'
import { User } from '@/types/user'
import { cn } from '@/lib/utils'
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenu,
} from '@/components/shadcnui/dropdown-menu'
import {
  AvatarFallback,
  AvatarImage,
  Avatar,
} from '@/components/shadcnui/avatar'

interface UserSectionProps {
  sidebarIsOpen: boolean
  session: Session | null
  refreshSession: () => void
}

export default function UserSection({
  sidebarIsOpen,
  session,
  refreshSession,
}: UserSectionProps) {
  const { data: user } = useQuery<User>({
    queryKey: ['get-user-by-session'],
    queryFn: () => getUserBySession(session),
    enabled: !!session,
  })

  const handleLogout = async () => {
    await logout()
    refreshSession()
  }

  if (user && session) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 hover:bg-gray-50">
            <Avatar>
              <AvatarImage src={user.imgSrc} alt="Foto de perfil" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3
              className={cn(
                'whitespace-nowrap text-sm font-semibold text-gray-800 opacity-100 transition-opacity duration-200',
                !sidebarIsOpen && 'pointer-events-none opacity-0',
              )}
            >
              {user.name}
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

      <LoginModal onLoginSuccess={refreshSession}>
        <Button variant="outline">Entrar</Button>
      </LoginModal>
    </div>
  )
}
