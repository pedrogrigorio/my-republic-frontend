import { State } from '@/types/state'
import { City } from '@/types/city'
import { api } from '@/lib/axios'

export async function getStates() {
  const response = await api.get<State[]>('states')

  return response.data
}

export async function getCities() {
  const response = await api.get<City[]>('cities')

  return response.data
}

export async function getCitiesByStateId(stateId: number) {
  const response = await api.get<City[]>('cities/by-state', {
    params: {
      stateId,
    },
  })

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
