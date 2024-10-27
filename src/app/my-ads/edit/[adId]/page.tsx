'use client'

import AdvertisementForm from '@/components/forms/advertisement-form'
import Breadcrumb from '@/components/ui/breadcrumb'

import { transformAdvertisementFinalValues } from '@/utils/transformAdvertisementData'
import { AdvertisementFormData } from '@/types/validation-types'
import { useParams, useRouter } from 'next/navigation'
import { Advertisement } from '@/types/advertisement'
import { useQuery } from '@tanstack/react-query'
import { Page } from '@/components/layout/page'
import {
  getAdvertisementById,
  updateAdvertisement,
} from '@/services/advertisement-sevice'

export default function EditAdvertisement() {
  const { adId } = useParams()

  const { data: advertisement } = useQuery<Advertisement>({
    queryKey: ['get-advertisement-to-edit', adId],
    queryFn: () => getAdvertisementById(adId as string),
  })

  const router = useRouter()

  const onSubmit = async (data: AdvertisementFormData) => {
    const { picture, ...updateAdvertisementDto } =
      transformAdvertisementFinalValues(data)

    const formData = new FormData()

    if (picture) {
      formData.append('file', picture)
    }

    formData.append(
      'updateAdvertisementDto',
      JSON.stringify(updateAdvertisementDto),
    )

    await updateAdvertisement(formData, Number(adId))

    router.replace('/my-ads')
  }

  if (!advertisement) return null

  return (
    <Page.Container className="pb-20">
      <Page.Header>
        <Breadcrumb
          currentPage="Editar anúncio"
          parents={[{ name: 'Buscar repúblicas', path: '/student-housing' }]}
        />
      </Page.Header>

      <Page.Content>
        <h2 className="font-bold">Editar anúncio</h2>
        <AdvertisementForm onSubmit={onSubmit} initialValues={advertisement} />
      </Page.Content>
    </Page.Container>
  )
}
