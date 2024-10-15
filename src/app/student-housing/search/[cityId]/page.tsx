'use client'

import SearchResultSkeleton from './_components/search-result-skeleton'
import AdvertisementGalery from '@/components/ui/advertisement-galery'
import CustomPagination from '@/components/ui/custom-pagination'
import LocaleSearchForm from '@/components/forms/locale-search-form'
import FilterButton from '@/components/ui/filter-button'

import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { searchAdvertisementsByCity } from '@/services/advertisement-sevice'
import { SearchResult } from '@/types/search-result'
import { useQuery } from '@tanstack/react-query'
import { Page } from '@/components/layout/page'

export default function SearchByCity() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const { cityId } = useParams()

  const page = Number(searchParams.get('page') ?? '1')
  const pageSize = 12

  const { data, isLoading } = useQuery<SearchResult>({
    queryKey: ['get-advertisement', page],
    queryFn: () => searchAdvertisementsByCity(cityId as string, page),
  })

  if (isLoading) {
    return <SearchResultSkeleton />
  }

  if (!data) return null

  const totalPages = Math.ceil(data.total / Number(pageSize))

  if (data.advertisements.length === 0) {
    return (
      <Page.Container>
        <Page.Header>
          <LocaleSearchForm />
        </Page.Header>

        <Page.Content>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold">Buscar repúblicas</h2>
              <span>
                Nenhum resultado encontrado em {data.city.name},{' '}
                {data.city.state.uf.toUpperCase()}.
              </span>
            </div>
          </div>
        </Page.Content>
      </Page.Container>
    )
  }

  return (
    <Page.Container>
      <Page.Header>
        <LocaleSearchForm />
      </Page.Header>

      <Page.Content>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold">Buscar repúblicas</h2>
            <span>
              {data.total} resultados encontrados em {data.city.name},{' '}
              {data.city.state.uf.toUpperCase()}.
            </span>
          </div>
          <FilterButton />
        </div>

        <AdvertisementGalery advertisements={data.advertisements} />

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
