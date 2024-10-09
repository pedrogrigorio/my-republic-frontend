import { api } from '@/lib/axios'

export async function getCities() {
  const response = await api.get('cities')

  return response.data
}

export async function searchCitiesByTerm(term: string) {
  const response = await api.get('cities/search', {
    params: {
      term,
    },
  })

  return response.data
}
