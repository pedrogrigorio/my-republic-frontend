import { Session } from '@/types/session'
import { User } from '@/types/user'
import { api } from '@/lib/axios'
import { ChangeNameFormData } from '@/types/validation-types'
import { getSession } from '@/lib/auth'

export async function getUserBySession(session: Session | null) {
  if (!session) return null

  const response = await api.get<User>(`users/${session.user.id}`)

  return response.data
}

export async function deleteUser(userId: number) {
  await api.delete(`users/${userId}`)
}

export async function changeName(data: ChangeNameFormData) {
  const session = await getSession()

  if (!session) return null

  await api.patch(`users/${session.user.id}/update-name`, data)
}
