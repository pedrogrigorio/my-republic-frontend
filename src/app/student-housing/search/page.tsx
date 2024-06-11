'use client'

import MyAdvertisement from '@/app/my-ads/_components/MyAdvertisement'
import LocaleSearch from '@/components/forms/LocaleSearch'
import { Skeleton } from '@/components/ui/skeleton'
import { useSearchParams } from 'next/navigation'

export default function Search() {
  const params = useSearchParams()
  const city = params.get('city')

  if (city) {
    return (
      <div className="h-screen px-12 py-10">
        <LocaleSearch />
        <div className="mt-10 flex flex-col text-strong">
          <div className="flex items-start justify-between">
            <div>
              <Skeleton className="h-8 w-48" />
              <Skeleton className="mt-2 h-4 w-56" />
            </div>
            <Skeleton className="h-10 w-32" />
          </div>
          <div className="border-border-primary border-b">
            <div className="h-10" />
          </div>

          <ul>
            {Array.from({ length: 10 }).map((_, index) => (
              <MyAdvertisement key={index} />
            ))}
          </ul>
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
          <LocaleSearch withButton />
        </div>
      </div>
    </div>
  )
}
