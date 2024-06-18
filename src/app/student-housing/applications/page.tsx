'use client'

import AdvertisementListItem from '@/components/common/advertisement-list-item'
import ApplicationsSkeleton from './_components/applications-skeleton'
import SearchInput from '@/components/common/search-input'
import Link from 'next/link'

import { ApplicationsList } from '@/types/applications-list'
import { applicationsList } from '@/data/applications-list'
import { useMockFetch } from '@/hooks/useMockFetch'
import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from '@/components/ui/pagination'

export default function Applications() {
  const { data, isLoading } = useMockFetch<ApplicationsList>(applicationsList)

  if (isLoading || !data) {
    return <ApplicationsSkeleton />
  }

  if (data.ads.length === 0) {
    return (
      <div className="relative h-full w-full">
        <div className="absolute top-64 flex w-full flex-col items-center gap-4">
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
      </div>
    )
  }

  return (
    <div className="h-screen px-12 py-10">
      <SearchInput placeholder="Buscar por nome do anúncio..." />
      <div className="mt-10 flex flex-col pb-8 text-strong">
        <div>
          <h2 className="font-bold">Minhas aplicações</h2>
          <span>{data.total} resultados encontrados</span>
        </div>

        <ul>
          {data.ads.map((ad, index) => (
            <li key={ad.id}>
              <AdvertisementListItem advertisement={ad} />

              {/* Divisor */}
              {index !== data.ads.length - 1 && (
                <div className="h-[1px] w-full bg-divisor" />
              )}
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
