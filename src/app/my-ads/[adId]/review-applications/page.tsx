'use client'

import CustomPagination from '@/components/ui/custom-pagination'
import Breadcrumb from '@/components/ui/breadcrumb'

import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { getApplicationsByAdvertisement } from '@/services/application-service'
import { useQuery } from '@tanstack/react-query'
import { Page } from '@/components/layout/page'
import ApplicationRequestListItem from '@/components/ui/application-request-list-item'
import { getAdvertisementById } from '@/services/advertisement-sevice'
import { Advertisement } from '@/types/advertisement'

export default function ReviewApplications() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { adId } = useParams()

  const page = Number(searchParams.get('page') ?? '1')
  const pageSize = 12

  const { data } = useQuery({
    queryKey: ['get-applications-by-ad', page],
    queryFn: () => getApplicationsByAdvertisement(adId as string, page),
  })

  const { data: advertisement } = useQuery<Advertisement>({
    queryKey: ['get-advertisement'],
    queryFn: () => getAdvertisementById(adId as string),
  })

  if (!data || !advertisement) return null

  const totalPages = Math.ceil(data.total / Number(pageSize))

  return (
    <Page.Container>
      <Page.Header>
        <Breadcrumb
          currentPage="Revisão de aplicações"
          parents={[
            { name: 'Meus anúncios', path: '/my-ads' },
            { name: advertisement.title, path: `/student-housing/${3}` },
          ]}
        />
      </Page.Header>

      <Page.Content>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold">Aplicações</h2>
            <span>
              {data.total} resultado{data.total > 1 && 's'} encontrado
              {data.total > 1 && 's'}
            </span>
          </div>
        </div>

        <ul>
          {data.applications.map((app, index) => (
            <li key={app.id}>
              <ApplicationRequestListItem application={app} />

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
