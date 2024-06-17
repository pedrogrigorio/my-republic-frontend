'use client'

import LocaleSearchForm from '@/components/forms/locale-search-form'
import AdvertisementCard from './_components/advertisement-card'
import { searchData } from '@/data/search-data'
import { SearchResult } from '@/types/search-result'
import { Skeleton } from '@/components/ui/skeleton'
import { useMockFetch } from '@/hooks/useMockFetch'
import { useSearchParams } from 'next/navigation'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from '@/components/ui/pagination'
import FilterButton from '@/components/common/filter-button'

export default function Search() {
  const params = useSearchParams()
  const city = params.get('city')
  const { data, isLoading } = useMockFetch<SearchResult>(searchData, city)

  if (isLoading && city) {
    return (
      <div className="h-screen px-12 py-10">
        <LocaleSearchForm />
        <div className="mt-10 flex flex-col pb-8">
          <div className="flex items-center justify-between">
            <div>
              <Skeleton className="h-6 w-48" />
              <Skeleton className="mt-2 h-5 w-56" />
            </div>
            <Skeleton className="h-10 w-28" />
          </div>

          <ul
            className="mt-8 grid gap-4"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            }}
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <li key={index}>
                <Skeleton className="h-[340px] w-full" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  if (data) {
    return (
      <div className="h-screen px-12 py-10">
        <LocaleSearchForm />
        <div className="mt-10 flex flex-col pb-8 text-strong">
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
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full">
      <div className="absolute top-64 w-full items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <h1>Buscar repúblicas</h1>
          <h2>Onde deseja morar?</h2>
        </div>

        <div className="mt-8 flex justify-center">
          <LocaleSearchForm withButton />
        </div>
      </div>
    </div>
  )
}
