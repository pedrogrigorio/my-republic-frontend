'use client'

import Breadcrumb from '@/components/common/breadcrumb'
import CreateAdvertisementForm from '@/components/forms/create-advertisement'
import { Page } from '@/components/layout/page'

export default function CreateAdvertisement() {
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
        <CreateAdvertisementForm />
      </Page.Content>
    </Page.Container>
  )
}
