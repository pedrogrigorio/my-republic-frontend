'use client'

import AdvertisementCard from '../../../components/common/advertisement-card'
import FavoritesSkeleton from './_components/favorites-skeleton'
import SearchInput from '@/components/common/search-input'

import { FavoritesList } from '@/types/favorites-list'
import { favoritesList } from '@/data/favorites-list'
import { useMockFetch } from '@/hooks/useMockFetch'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from '@/components/ui/pagination'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Favorites() {
  const { data, isLoading } = useMockFetch<FavoritesList>(favoritesList)

  if (isLoading || !data) {
    return <FavoritesSkeleton />
  }

  if (data.ads.length === 0) {
    return (
      <div className="relative h-full w-full">
        <div className="absolute top-64 flex w-full flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <h1>Você ainda não possui favoritos</h1>
            <h2>Encontre repúblicas agora mesmo.</h2>
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

  if (data) {
    return (
      <div className="h-screen px-12 py-10">
        <SearchInput placeholder="Buscar por nome do anúncio..." />
        <div className="mt-10 flex flex-col pb-8 text-strong">
          <div>
            <h2 className="font-bold">Favoritos</h2>
            <span>{data.total} resultados encontrados</span>
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

          {data.total > 12 && (
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
          )}
        </div>
      </div>
    )
  }
}
