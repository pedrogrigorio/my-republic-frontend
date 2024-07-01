'use client'

import CreateAdvertisementForm from '@/components/forms/create-advertisement'
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
    <div className="relative">
      <div className="flex h-screen flex-col overflow-y-auto px-12 py-10">
        <div className="h-14">
          <Breadcrumb className="flex h-14 items-center">
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
        </div>

        <div className="mt-10 flex flex-1 flex-col pb-10 text-strong">
          <h2 className="font-bold">Criar anúncio</h2>
          <CreateAdvertisementForm />
        </div>
      </div>
    </div>
  )
}
