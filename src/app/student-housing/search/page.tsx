'use client'

import LocaleSearchForm from '@/components/forms/locale-search-form'
import { Button } from '@/components/ui/button'

export default function Search() {
  return (
    <div className="absolute top-64 w-full items-center gap-4 px-8 text-center">
      <div className="flex flex-col items-center gap-2">
        <h1>Buscar repúblicas</h1>
        <h2>Onde deseja morar?</h2>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <LocaleSearchForm className="max-w-128" />
        <Button
          type="submit"
          form="localeForm"
          className="h-14 rounded-xl bg-button-primary px-10 text-lg font-semibold hover:bg-button-primary-hover"
        >
          Buscar
        </Button>
      </div>
    </div>
  )
}
