'use client'

import AdvertisementCard from '../search/[cityId]/_components/advertisement-card'
import FavoritesSkeleton from './_components/favorites-skeleton'
import SearchInput from '@/components/common/search-input'

import { FavoritesList } from '@/types/favoritesList'
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

export default function Favorites() {
  const { data, isLoading } = useMockFetch<FavoritesList>(favoritesList)

  if (isLoading) {
    return <FavoritesSkeleton />
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
}
