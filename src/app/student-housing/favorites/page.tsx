'use client'

import AdvertisementCard from '../../../components/ui/advertisement-card'
import FavoritesSkeleton from './_components/favorites-skeleton'
import SearchInput from '@/components/ui/search-input'

import { FavoritesList } from '@/types/favorites-list'
import { favoritesList } from '@/data/favorites-list'
import { useMockFetch } from '@/hooks/useMockFetch'
import { Button } from '@/components/shadcnui/button'
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
import Link from 'next/link'

export default function Favorites() {
  const { data, isLoading } = useMockFetch<FavoritesList>(favoritesList)

  if (isLoading || !data) {
    return <FavoritesSkeleton />
  }

  if (data.ads.length === 0) {
    return (
      <div className="absolute top-64 flex w-full flex-col items-center gap-4 px-8 text-center">
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
    )
  }

  if (data) {
    return (
      <Page.Container>
        <Page.Header>
          <SearchInput placeholder="Buscar por nome do anúncio..." />
        </Page.Header>

        <Page.Content>
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
        </Page.Content>
      </Page.Container>
    )
  }
}
