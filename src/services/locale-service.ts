import { api } from '@/lib/axios'

export async function getCities() {
  const response = await api.get('cities')

  return response.data
}
