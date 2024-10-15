import { LoginFormData, SignUpFormData } from '@/types/validation-types'
import { Session } from '@/types/session'
import { api } from '@/lib/axios'

export async function login(data: LoginFormData) {
  const response = await api.post<Session>('auth/login', data)

  return response.data
}

export async function signup(data: SignUpFormData) {
  await api.post<Session>('users', data)
}
