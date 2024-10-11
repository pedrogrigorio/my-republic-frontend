import { api } from '@/lib/axios'

export async function searchAdvertisementsByCity(
  cityId: string,
  page: number = 1,
  pageSize: number = 12,
) {
  const response = await api.get(`advertisements/search-by-city`, {
    params: { city: cityId, page, pageSize },
  })

  return response.data
}

export async function getAdvertisementById(advertisementId: string) {
  const response = await api.get(`advertisements/${advertisementId}`)

  return response.data
}
