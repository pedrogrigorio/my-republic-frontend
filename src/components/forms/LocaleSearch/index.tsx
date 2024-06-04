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

const searchFormSchema = z.object({
  search: z.string(),
})

type searchFormData = z.infer<typeof searchFormSchema>

export default function LocaleSearch() {
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

  const [search, setSearch] = useState('')

  const cities = [
    { name: 'Iguatu' },
    { name: 'Quixadá' },
    { name: 'São Paulo' },
    { name: 'São José' },
  ]

  const filteredCities =
    search.length > 0
      ? cities.filter((city) => {
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
      : []

  return (
    <form
      className="flex flex-1 justify-center gap-3"
      onSubmit={handleSubmit(onSearch)}
    >
      <Popover open={filteredCities.length > 0 && !!search} modal={false}>
        <PopoverTrigger asChild>
          <div className="max-w-128 flex h-14 min-w-64 flex-1 items-center rounded-xl border border-primary bg-white px-3">
            <MagnifyingGlass size={32} className="text-placeholder" />
            <Input
              className=" border-none placeholder:text-placeholder focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Busque por cidade"
              {...register('search', { onChange: (e) => handleChange(e) })}
            />
          </div>
        </PopoverTrigger>

        <PopoverContent
          className="max-h-[--radix-popover-content-available-height] w-[--radix-popover-trigger-width]"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <ul>
            {filteredCities.map((city) => (
              <li key={city.name}>{city.name}</li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>

      <Button
        type="submit"
        className="h-14 rounded-xl bg-button-primary px-10 text-lg font-semibold hover:bg-button-primary-hover"
      >
        Buscar
      </Button>
    </form>
  )
}
