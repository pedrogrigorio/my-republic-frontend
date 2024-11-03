import { ApplicationPage } from '@/types/application-page'
import { api } from '@/lib/axios'
import { ApplyFormData } from '@/types/validation-types'

export async function getApplications() {
  const response = await api.get<ApplicationPage>('applications/get-by-user')

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
