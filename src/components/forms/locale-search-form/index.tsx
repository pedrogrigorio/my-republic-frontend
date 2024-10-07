'use client'

import { ChangeEvent, useState } from 'react'
import { searchCitiesByTerm } from '@/services/locale-service'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { useDebounce } from '@/hooks/useDebounce'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Spinner } from '@nextui-org/spinner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { City } from '@/types/city'
import { cn } from '@/lib/utils'
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
  showButton?: boolean
}

export default function LocaleSearchForm({
  className,
  showButton,
}: LocaleSearchFormProps) {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const debounceSearch = useDebounce(search, 500)

  const { data: cities, isLoading } = useQuery<City[]>({
    queryKey: ['search-cities', debounceSearch],
    queryFn: () => searchCitiesByTerm(search),
  })

  const isButtonDisabled = isLoading || search !== debounceSearch

  const { register, handleSubmit, reset } = useForm<localeSearchFormData>({
    resolver: zodResolver(localeSearchFormSchema),
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const onSearch = () => {
    reset()

    if (cities && cities.length > 0) {
      router.push(`/student-housing/search/${cities[0].id}`)
    }
  }

  const handleItemClick = (city: City) => {
    setSearch(`${city.name} - ${city.state.uf}`)
    router.push(`/student-housing/search/${city.id}`)
  }

  return (
    <form
      className="mt-4 flex flex-1 justify-center gap-3"
      onSubmit={handleSubmit(onSearch)}
    >
      <div className={cn('flex-1', className)}>
        <Popover open={cities && cities.length > 0 && !!search} modal={false}>
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
              {cities?.map((city) => (
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
      </div>

      {showButton && (
        <Button
          type="submit"
          disabled={isButtonDisabled}
          className="flex h-14 gap-2 rounded-xl bg-button-primary px-10 text-lg font-semibold hover:bg-button-primary-hover"
        >
          {isButtonDisabled && <Spinner color="default" size="sm" />}
          <span>Buscar</span>
        </Button>
      )}
    </form>
  )
}
