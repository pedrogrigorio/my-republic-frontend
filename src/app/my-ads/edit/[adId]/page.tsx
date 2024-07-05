'use client'

import AdvertisementForm from '@/components/forms/advertisement-form'
import Breadcrumb from '@/components/common/breadcrumb'

import { AdvertisementFormData } from '@/types/validation-types'
import { useRouter } from 'next/navigation'
import { toast } from '@/components/ui/use-toast'
import { Page } from '@/components/layout/page'
import { ad } from '@/data/ad'

export default function EditAdvertisement() {
  const router = useRouter()

  const onSubmit = (data: AdvertisementFormData) => {
    console.log(data)

    toast({
      title: 'Editado com sucesso',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })

    router.replace('/my-ads')
  }

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
        <AdvertisementForm onSubmit={onSubmit} initialValues={ad} />
      </Page.Content>
    </Page.Container>
  )
}
