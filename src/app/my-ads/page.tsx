'use client'

import SearchInput from '@/components/layout/SearchInput'
import { Button } from '@/components/ui/button'
import MyAdvertisement from './_components/MyAdvertisement'
import { ads } from '@/data/AdData'
import { useState } from 'react'

export default function MyAds() {
  const [selectedTab, setSelectedTab] = useState('all')
  // return (
  //   <div className="relative h-full w-full">
  //     <div className="absolute top-64 flex w-full flex-col items-center gap-4">
  //       <div className="flex flex-col items-center gap-2">
  //         <h1>Você ainda não possui anúncios</h1>
  //         <h2>Encontre pessoas e forme uma república.</h2>
  //       </div>

  //       <Button className="h-10 bg-button-primary font-medium hover:bg-button-primaryHover">
  //         Criar anúncio
  //       </Button>
  //     </div>
  //   </div>
  // )

  return (
    <div className="h-screen px-12 py-10">
      <SearchInput />
      <div className="mt-10 flex flex-col text-strong">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-bold">Meus anúncios</h2>
            <span>10 resultados encontrados</span>
          </div>
          <Button className="my-3 self-end bg-button-primary hover:bg-button-primary-hover">
            Criar anúncio
          </Button>
        </div>

        <div className="border-b border-border-primary">
          <button
            onClick={() => setSelectedTab('all')}
            data-success={selectedTab === 'all'}
            className="border-tabActive h-10 w-32 text-gray-300 data-[success=true]:border-b-2 data-[success=true]:text-strong"
          >
            Todos
          </button>
          <button
            onClick={() => setSelectedTab('active')}
            data-success={selectedTab === 'active'}
            className="border-tabActive h-10 w-32 text-gray-300 data-[success=true]:border-b-2 data-[success=true]:text-strong"
          >
            Ativo
          </button>
          <button
            onClick={() => setSelectedTab('paused')}
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
                <MyAdvertisement advertisement={ad} />

                {/* Divisor */}
                <div className="bg-divisor h-[1px] w-full" />
              </li>
            ))}

          {selectedTab === 'active' &&
            ads
              .filter((ad) => ad.isActive)
              .map((ad) => (
                <li key={ad.id}>
                  <MyAdvertisement advertisement={ad} />

                  {/* Divisor */}
                  <div className="bg-divisor h-[1px] w-full" />
                </li>
              ))}

          {selectedTab === 'paused' &&
            ads
              .filter((ad) => !ad.isActive)
              .map((ad) => (
                <li key={ad.id}>
                  <MyAdvertisement advertisement={ad} />

                  {/* Divisor */}
                  <div className="bg-divisor h-[1px] w-full" />
                </li>
              ))}
        </ul>
      </div>
    </div>
  )
}
