'use client'

import { ChangeEvent, useState } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { zodResolver } from '@hookform/resolvers/zod'
import { getCities } from '@/services/locale-service'
import { useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { City } from '@/types/city'
import { z } from 'zod'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const localeSearchFormSchema = z.object({
  search: z.string(),
})

type localeSearchFormData = z.infer<typeof localeSearchFormSchema>

interface LocaleSearchFormProps {
  className?: string
}

export default function LocaleSearchForm({ className }: LocaleSearchFormProps) {
  const router = useRouter()

  const { data: cities } = useQuery<City[]>({
    queryKey: ['cities'],
    queryFn: getCities,
  })

  const [search, setSearch] = useState('')

  const { register, handleSubmit, reset } = useForm<localeSearchFormData>({
    resolver: zodResolver(localeSearchFormSchema),
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const onSearch = (data: localeSearchFormData) => {
    console.log(data)
    reset()
  }

  const handleItemClick = (city: City) => {
    setSearch(`${city.name} - ${city.state.uf}`)
    router.push(`/student-housing/search/${city.id}`)
  }

  if (!cities) return null

  const filteredCities =
    search.length > 0
      ? cities
          .filter((city) => {
            const searchTerm = search
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
            const cityName = city.name
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')

            return cityName.startsWith(searchTerm)
          })
          .slice(0, 10)
      : []

  return (
    <form
      className={`flex-1 ${className}`}
      onSubmit={handleSubmit(onSearch)}
      id="localeForm"
    >
      <Popover open={filteredCities.length > 0 && !!search} modal={false}>
        <PopoverTrigger asChild>
          <div className="flex h-14 min-w-64 flex-1 items-center rounded-xl border border-primary bg-white px-3 ">
            <MagnifyingGlass size={32} className="text-placeholder" />
            <Input
              autoComplete="off"
              type="search"
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
                key={city.id}
                className="h-10 rounded-md hover:bg-gray-100 hover:text-black"
              >
                <button
                  className="flex h-full items-center px-2 text-sm text-strong"
                  onClick={() => {
                    handleItemClick(city)
                  }}
                >
                  {city.name} - {city.state.uf}
                </button>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </form>
  )
}
