'use client'

import FilterButton from '@/components/ui/filter-button'
import LocaleSearchForm from '@/components/forms/locale-search-form'
import AdvertisementCard from '../../../../components/ui/advertisement-card'
import SearchResultSkeleton from './_components/search-result-skeleton'

import { searchData } from '@/data/search-data'
import { useMockFetch } from '@/hooks/useMockFetch'
import { SearchResult } from '@/types/search-result'
import { useParams } from 'next/navigation'
import { Page } from '@/components/layout/page'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from '@/components/shadcnui/pagination'

export default function SearchByCity() {
  const { cityId } = useParams()
  const { data, isLoading } = useMockFetch<SearchResult>(searchData, !!cityId)

  if (isLoading) {
    return <SearchResultSkeleton />
  }

  if (data) {
    return (
      <Page.Container>
        <Page.Header>
          <LocaleSearchForm />
        </Page.Header>

        <Page.Content>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold">Buscar repúblicas</h2>
              <span>{data.total} resultados encontrados em São Paulo, SP</span>
            </div>
            <FilterButton />
          </div>

          <ul
            className="mt-8 grid gap-4"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            }}
          >
            {data.ads.map((ad) => (
              <li key={ad.id}>
                <AdvertisementCard ad={ad} />
              </li>
            ))}
          </ul>

          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Page.Content>
      </Page.Container>
    )
  }
}
