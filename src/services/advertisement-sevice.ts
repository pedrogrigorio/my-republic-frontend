import { AdvertisementsPage } from '@/types/advertisements-page'
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

export async function getAdvertisementsByOwner(
  page: number = 1,
  pageSize: number = 12,
) {
  const response = await api.get<AdvertisementsPage>(
    'advertisements/get-by-owner',
    {
      params: { page, pageSize },
    },
  )

  return response.data
}

export async function createAdvertisement(data: FormData) {
  await api.post('advertisements/', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export async function updateAdvertisement(
  data: FormData,
  advertisementId: number,
) {
  await api.put(`advertisements/${advertisementId}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
