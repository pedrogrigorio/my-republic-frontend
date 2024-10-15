import { Session } from '@/types/session'
import { api } from '@/lib/axios'

export async function getUserBySession(session: Session | null) {
  if (!session) return null

  console.log('buscou')
  const response = await api.get(`users/${session.user.id}`)

  return response.data
}
