'use client'

import CustomPagination from '@/components/ui/custom-pagination'
import AdvertisementListItem from '@/components/ui/advertisement-list-item'
import ApplicationsSkeleton from './_components/applications-skeleton'
import SearchInput from '@/components/ui/search-input'
import Link from 'next/link'

import { useRouter, useSearchParams } from 'next/navigation'
import { getApplications } from '@/services/application-service'
import { useQuery } from '@tanstack/react-query'
import { Button } from '@/components/shadcnui/button'
import { Page } from '@/components/layout/page'

export default function Applications() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const page = Number(searchParams.get('page') ?? '1')
  const pageSize = 12

  const { data, isLoading } = useQuery({
    queryKey: ['get-applications'],
    queryFn: () => getApplications(page),
  })

  if (isLoading || !data) {
    return <ApplicationsSkeleton />
  }

  const totalPages = Math.ceil(data.total / Number(pageSize))

  if (data.applications.length === 0) {
    return (
      <div className="absolute top-64 flex w-full flex-col items-center gap-4 px-8 text-center">
        <div className="flex flex-col items-center gap-2">
          <h1>Você ainda não possui aplicações</h1>
          <h2>Encontre repúblicas e aplique agora mesmo.</h2>
        </div>

        <Link href="/student-housing/search">
          <Button className="hover:bg-button-primaryHover h-12 bg-button-primary px-6 font-semibold">
            Buscar repúblicas
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <Page.Container>
      <Page.Header>
        <SearchInput placeholder="Buscar por nome do anúncio..." />
      </Page.Header>

      <Page.Content>
        <div>
          <h2 className="font-bold">Minhas aplicações</h2>
          <span>{data.total} resultados encontrados</span>
        </div>

        <ul>
          {data.applications.map((app, index) => (
            <li key={app.id}>
              <AdvertisementListItem
                advertisement={app.advertisement}
                status={app.status}
                applicationId={app.id}
                variant="applicant"
              />

              {/* Divisor */}
              {index !== data.applications.length - 1 && (
                <div className="h-[1px] w-full bg-divisor" />
              )}
            </li>
          ))}
        </ul>

        <CustomPagination
          firstPage={() => router.push('?page=1')}
          lastPage={() => router.push('?page=1')}
          nextPage={() => router.push(`?page=${Number(page) + 1}`)}
          previousPage={() => router.push(`?page=${Number(page) - 1}`)}
          setPageIndex={(p) => router.push(`?page=${p + 1}`)}
          pageIndex={Number(page) - 1}
          totalPages={totalPages}
          canNextPage={Number(page) < totalPages}
          canPreviousPage={Number(page) > 1}
          className="mt-4"
        />
      </Page.Content>
    </Page.Container>
  )
}
