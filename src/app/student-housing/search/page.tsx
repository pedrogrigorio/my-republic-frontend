'use client'

import LocaleSearchForm from '@/components/forms/locale-search-form'

export default function Search() {
  return (
    <div className="absolute top-64 w-full items-center gap-4 px-8 text-center">
      <div className="flex flex-col items-center gap-2">
        <h1>Buscar repúblicas</h1>
        <h2>Onde deseja morar?</h2>
      </div>

      <LocaleSearchForm className="max-w-128" showButton />
    </div>
  )
}
