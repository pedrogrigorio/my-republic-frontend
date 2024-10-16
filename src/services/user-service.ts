import { getSession } from '@/lib/auth'
import { Session } from '@/types/session'
import { User } from '@/types/user'
import { api } from '@/lib/axios'
import {
  ChangePasswordFormData,
  ChangeEmailFormData,
  ChangeNameFormData,
} from '@/types/validation-types'

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

export async function changeEmail(data: ChangeEmailFormData) {
  const session = await getSession()

  if (!session) return null

  await api.patch(`users/${session.user.id}/update-email`, data)
}

export async function changePassword(data: ChangePasswordFormData) {
  const session = await getSession()

  if (!session) return null

  await api.patch(`users/${session.user.id}/update-password`, data)
}

export async function changePhoto(file: File) {
  const session = await getSession()

  if (!session) return null

  const formData = new FormData()
  formData.append('file', file)

  await api.patch(`users/${session.user.id}/update-photo`, formData)
}
