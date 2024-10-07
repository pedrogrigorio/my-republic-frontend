'use client'

import AdvertisementListItem from '../../components/ui/advertisement-list-item'
import MyAdsSkeleton from './_components/my-ads-skeleton'
import SearchInput from '@/components/ui/search-input'
import Link from 'next/link'

import { advertisements } from '@/data/advertisements'
import { useSelectedTab } from './_hooks/useSelectedTab'
import { Advertisement } from '@/types/advertisement'
import { useMockFetch } from '@/hooks/useMockFetch'
import { Button } from '@/components/shadcnui/button'
import { Page } from '@/components/layout/page'

export default function MyAds() {
  const { data: ads, isLoading } = useMockFetch<Advertisement[]>(advertisements)
  const { selectedTab, selectAll, selectActive, selectPaused } =
    useSelectedTab()

  if (isLoading || !ads) {
    return <MyAdsSkeleton />
  }

  if (ads.length === 0) {
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

  return (
    <Page.Container>
      <Page.Header>
        <SearchInput placeholder="Buscar por nome do anúncio..." />
      </Page.Header>

      <Page.Content>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold">Meus anúncios</h2>
            <span>10 resultados encontrados</span>
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
            ads.map((ad) => (
              <li key={ad.id}>
                <AdvertisementListItem advertisement={ad} />

                {/* Divisor */}
                <div className="h-[1px] w-full bg-divisor" />
              </li>
            ))}

          {selectedTab === 'active' &&
            ads
              .filter((ad) => ad.isActive)
              .map((ad) => (
                <li key={ad.id}>
                  <AdvertisementListItem advertisement={ad} />

                  {/* Divisor */}
                  <div className="h-[1px] w-full bg-divisor" />
                </li>
              ))}

          {selectedTab === 'paused' &&
            ads
              .filter((ad) => !ad.isActive)
              .map((ad) => (
                <li key={ad.id}>
                  <AdvertisementListItem advertisement={ad} />

                  {/* Divisor */}
                  <div className="h-[1px] w-full bg-divisor" />
                </li>
              ))}
        </ul>
      </Page.Content>
    </Page.Container>
  )
}
