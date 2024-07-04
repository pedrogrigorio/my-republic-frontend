'use client'

import CreateAdvertisementForm from '@/components/forms/create-advertisement'
import { Page } from '@/components/layout/page'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'

export default function CreateAdvertisement() {
  return (
    <Page.Container className="pb-20">
      <Page.Header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/settings/account">
                Configurações
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Minha conta</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Page.Header>

      <Page.Content>
        <h2 className="font-bold">Criar anúncio</h2>
        <CreateAdvertisementForm />
      </Page.Content>
    </Page.Container>
  )
}
