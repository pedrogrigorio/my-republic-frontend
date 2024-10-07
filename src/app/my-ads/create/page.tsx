'use client'

import AdvertisementForm from '@/components/forms/advertisement-form'
import Breadcrumb from '@/components/ui/breadcrumb'

import { AdvertisementFormData } from '@/types/validation-types'
import { useRouter } from 'next/navigation'
import { toast } from '@/components/shadcnui/use-toast'
import { Page } from '@/components/layout/page'

export default function CreateAdvertisement() {
  const router = useRouter()

  const onSubmit = (data: AdvertisementFormData) => {
    console.log(data)

    toast({
      title: 'Submit:',
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
