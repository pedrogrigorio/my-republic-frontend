import SignUpModal from '@/components/modals/sign-up-modal'
import LoginModal from '@/components/modals/login-modal'
import Avatar from '@/components/ui/avatar'

import { useUser } from '@/context/user-context'
import { SignOut } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/shadcnui/button'
import { logout } from '@/lib/auth'
import { cn } from '@/lib/utils'
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenu,
} from '@/components/shadcnui/dropdown-menu'
import { useQuery } from '@tanstack/react-query'
import { User } from '@/types/user'
import { getUserBySession } from '@/services/user-service'
import { useSession } from '@/hooks/useSession'

interface UserSectionProps {
  sidebarIsOpen: boolean
}

export default function UserSection({ sidebarIsOpen }: UserSectionProps) {
  const { user, setUser } = useUser()
  const { session } = useSession()

  useQuery<User | null>({
    queryKey: ['get-user-profile'],
    queryFn: async () => {
      const response = await getUserBySession(session)

      setUser(response)

      return response
    },
    enabled: !!session,
  })

  const handleLogout = async () => {
    await logout()
    setUser(null)
  }

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 hover:bg-gray-50">
            <Avatar user={user} />
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

      <LoginModal>
        <Button variant="outline">Entrar</Button>
      </LoginModal>
    </div>
  )
}
