'use client'

import SecuritySection from './_components/security-section'
import ProfileSection from './_components/profile-section'
import DeleteSection from './_components/delete-section'
import Breadcrumb from '@/components/ui/breadcrumb'

import { getUserBySession } from '@/services/user-service'
import { useSession } from '@/hooks/useSession'
import { useQuery } from '@tanstack/react-query'
import { useUser } from '@/context/user-context'
import { Page } from '@/components/layout/page'
import { User } from '@/types/user'

export default function Account() {
  const { session } = useSession()
  const { setUser } = useUser()

  const { data: user } = useQuery<User | null>({
    queryKey: ['get-user-profile', session],
    queryFn: async () => {
      const user = await getUserBySession(session)

      if (!user) return null

      setUser(user)
      return user
    },
  })

  if (!user) return null

  return (
    <Page.Container>
      <Page.Header>
        <Breadcrumb
          currentPage="Minha conta"
          parents={[{ name: 'Configurações', path: '/settings' }]}
        />
      </Page.Header>

      <Page.Content>
        <ProfileSection user={user} />

        <div className="h-[1px] w-full bg-divisor" />

        <SecuritySection user={user} />

        <div className="h-[1px] w-full bg-divisor" />

        <DeleteSection user={user} />
      </Page.Content>
    </Page.Container>
  )
}
