'use client'

import AdvertisementListItem from '../../components/ui/advertisement-list-item'
import MyAdsSkeleton from './_components/my-ads-skeleton'
import SearchInput from '@/components/ui/search-input'
import Link from 'next/link'

import { getAdvertisementsByOwner } from '@/services/advertisement-sevice'
import { useSelectedTab } from './_hooks/useSelectedTab'
import { useQuery } from '@tanstack/react-query'
import { Button } from '@/components/shadcnui/button'
import { Page } from '@/components/layout/page'
import CustomPagination from '@/components/ui/custom-pagination'
import { useRouter, useSearchParams } from 'next/navigation'

export default function MyAds() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const page = Number(searchParams.get('page') ?? '1')
  const pageSize = 12

  const { data, isLoading } = useQuery({
    queryKey: ['get-ads-by-user', page],
    queryFn: () => getAdvertisementsByOwner(page),
  })

  const { selectedTab, selectAll, selectActive, selectPaused } =
    useSelectedTab()

  if (isLoading) {
    return <MyAdsSkeleton />
  }

  if (!data?.total) {
    return (
      <div className="absolute top-64 flex w-full flex-col items-center gap-4 px-8 text-center">
        <div className="flex flex-col items-center gap-2">
          <h1>Você ainda não possui anúncios</h1>
          <h2>Encontre pessoas e forme uma república.</h2>
        </div>

        <Button
          className="hover:bg-button-primaryHover h-12 bg-button-primary px-6 font-semibold"
          asChild
        >
          <Link href="my-ads/create">Criar anúncio</Link>
        </Button>
      </div>
    )
  }

  const totalPages = Math.ceil(data.total / Number(pageSize))

  return (
    <Page.Container>
      <Page.Header>
        <SearchInput placeholder="Buscar por nome do anúncio..." />
      </Page.Header>

      <Page.Content>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold">Meus anúncios</h2>
            <span>{data.total} resultados encontrados</span>
          </div>
          <Button
            className="bg-button-primary hover:bg-button-primary-hover"
            asChild
          >
            <Link href="my-ads/create">Criar anúncio</Link>
          </Button>
        </div>

        <div className="border-border-primary mt-4 border-b">
          <button
            onClick={selectAll}
            data-success={selectedTab === 'all'}
            className="h-10 w-32 border-tabActive text-gray-300 data-[success=true]:border-b-2 data-[success=true]:text-strong"
          >
            Todos
          </button>
          <button
            onClick={selectActive}
            data-success={selectedTab === 'active'}
            className="h-10 w-32 border-tabActive text-gray-300 data-[success=true]:border-b-2 data-[success=true]:text-strong"
          >
            Ativo
          </button>
          <button
            onClick={selectPaused}
            data-success={selectedTab === 'paused'}
            className="h-10 w-32 border-button-primary text-gray-300 data-[success=true]:border-b-2 data-[success=true]:text-strong"
          >
            Pausado
          </button>
        </div>

        <ul>
          {selectedTab === 'all' &&
            data.advertisements.map((ad) => (
              <li key={ad.id}>
                <AdvertisementListItem advertisement={ad} />

                {/* Divisor */}
                <div className="h-[1px] w-full bg-divisor" />
              </li>
            ))}

          {selectedTab === 'active' &&
            data.advertisements
              .filter((ad) => ad.isActive)
              .map((ad) => (
                <li key={ad.id}>
                  <AdvertisementListItem advertisement={ad} />

                  {/* Divisor */}
                  <div className="h-[1px] w-full bg-divisor" />
                </li>
              ))}

          {selectedTab === 'paused' &&
            data.advertisements
              .filter((ad) => !ad.isActive)
              .map((ad) => (
                <li key={ad.id}>
                  <AdvertisementListItem advertisement={ad} />

                  {/* Divisor */}
                  <div className="h-[1px] w-full bg-divisor" />
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
