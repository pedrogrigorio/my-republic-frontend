import { ApplicationPage } from '@/types/application-page'
import { api } from '@/lib/axios'
import { ApplyFormData } from '@/types/validation-types'

export async function getApplications(page: number = 1, pageSize: number = 12) {
  const response = await api.get<ApplicationPage>('applications/get-by-user', {
    params: { page, pageSize },
  })

  return response.data
}

export async function cancelApplication(applicationId: number) {
  await api.delete(`applications/${applicationId}`)
}

export async function apply(advertisementId: number, data: ApplyFormData) {
  await api.post('applications/', {
    advertisementId,
    message: data.message,
  })
}

export async function getApplicationsByAdvertisement(
  advertisementId: number | string,
  page: number = 1,
  pageSize: number = 12,
) {
  const response = await api.get<ApplicationPage>(
    `applications/get-by-ad/${advertisementId}`,
    {
      params: { page, pageSize },
    },
  )

  return response.data
}

export async function refuseApplication(applicationId: number) {
  await api.patch(`applications/${applicationId}/refuse`)
}

export async function acceptApplication(applicationId: number) {
  await api.patch(`applications/${applicationId}/accept`)
}
