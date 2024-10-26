'use client'

import AdvertisementForm from '@/components/forms/advertisement-form'
import Breadcrumb from '@/components/ui/breadcrumb'

import { AdvertisementFormData } from '@/types/validation-types'
import { createAdvertisement } from '@/services/advertisement-sevice'
import { useRouter } from 'next/navigation'
import { Page } from '@/components/layout/page'

export default function CreateAdvertisement() {
  const router = useRouter()

  const onSubmit = async (data: AdvertisementFormData) => {
    const { picture, ...createAdvertisementDto } = data

    const formData = new FormData()
    formData.append('file', picture)
    formData.append(
      'createAdvertisementDto',
      JSON.stringify(createAdvertisementDto),
    )

    await createAdvertisement(formData)
    router.replace('/my-ads')
  }

  return (
    <Page.Container className="pb-20">
      <Page.Header>
        <Breadcrumb
          currentPage="Criar anúncio"
          parents={[{ name: 'Buscar repúblicas', path: '/student-housing' }]}
        />
      </Page.Header>

      <Page.Content>
        <h2 className="font-bold">Criar anúncio</h2>
        <AdvertisementForm onSubmit={onSubmit} />
      </Page.Content>
    </Page.Container>
  )
}
