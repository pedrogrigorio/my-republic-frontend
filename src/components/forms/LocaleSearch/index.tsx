'use client'

import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { City } from '@/types/locale'
import { useRouter } from 'next/navigation'
import { useFetchCities } from './hooks/useFetchCities'

const searchFormSchema = z.object({
  search: z.string(),
})

type searchFormData = z.infer<typeof searchFormSchema>

interface LocaleSearchProps {
  withButton?: boolean
}

export default function LocaleSearch({ withButton }: LocaleSearchProps) {
  const router = useRouter()
  const { cities } = useFetchCities()
  const [search, setSearch] = useState('')

  const { register, handleSubmit, reset } = useForm<searchFormData>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const onSearch = (data: searchFormData) => {
    console.log(data)
    reset()
  }

  const handleCityClick = (city: City) => {
    setSearch(`${city.municipioNome} - ${city.UFSigla}`)
    router.push(`/student-housing/search?city=${city.municipioId}`)
  }

  const filteredCities =
    search.length > 0
      ? cities
          .filter((city) => {
            const searchTerm = search
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
            const cityName = city.municipioNome
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')

            return cityName.startsWith(searchTerm)
          })
          .slice(0, 10)
      : []

  return (
    <form
      className="flex flex-1 justify-center gap-3"
      onSubmit={handleSubmit(onSearch)}
    >
      <Popover open={filteredCities.length > 0 && !!search} modal={false}>
        <PopoverTrigger asChild>
          <div
            data-success={withButton}
            className="flex h-14 min-w-64 flex-1 items-center rounded-xl border border-primary bg-white px-3 data-[success=true]:max-w-128"
          >
            <MagnifyingGlass size={32} className="text-placeholder" />
            <Input
              className=" border-none placeholder:text-placeholder focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Busque por cidade"
              value={search}
              {...register('search', { onChange: (e) => handleChange(e) })}
            />
          </div>
        </PopoverTrigger>

        <PopoverContent
          className="max-h-[--radix-popover-content-available-height] w-[--radix-popover-trigger-width] p-1"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <ul>
            {filteredCities.map((city) => (
              <li
                key={city.municipioId}
                className="h-10 rounded-md hover:bg-gray-100 hover:text-black"
              >
                <button
                  className="flex h-full items-center px-2 text-sm text-strong"
                  onClick={() => {
                    handleCityClick(city)
                  }}
                >
                  {city.municipioNome} - {city.UFSigla}
                </button>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>

      {withButton && (
        <Button
          type="submit"
          className="h-14 rounded-xl bg-button-primary px-10 text-lg font-semibold hover:bg-button-primary-hover"
        >
          Buscar
        </Button>
      )}
    </form>
  )
}
