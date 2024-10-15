import { Session } from '@/types/session'
import { User } from '@/types/user'
import { api } from '@/lib/axios'

export async function getUserBySession(session: Session | null) {
  if (!session) return null

  const response = await api.get<User>(`users/${session.user.id}`)

  return response.data
}

export async function deleteUser(userId: number) {
  await api.delete(`users/${userId}`)
}
