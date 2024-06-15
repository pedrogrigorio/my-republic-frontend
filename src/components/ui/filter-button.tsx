import { Faders } from '@phosphor-icons/react/dist/ssr'
import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import FilterForm from '../forms/FilterForm'

export default function FilterButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="flex gap-2 bg-button-filter px-6 hover:bg-button-filter-hover">
          <Faders size={20} />
          Filtro
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mr-16 flex h-[65vh] w-[572px] flex-col rounded-3xl p-0">
        {/* Header */}
        <div className="px-6 pb-4 pt-8 font-medium text-strong">
          <h3>Notificações</h3>
        </div>

        {/* Divisor */}
        <div className="h-[1px] w-full bg-divisor"></div>

        {/* Conteúdo */}
        <FilterForm />

        {/* Divisor */}
        <div className="h-[1px] w-full bg-divisor" />

        {/* Botões */}
        <div className="flex justify-end gap-2 px-6 pb-6 pt-4">
          <Button variant="ghost">Cancelar</Button>
          <Button
            className="bg-button-filter hover:bg-button-filter-hover"
            type="submit"
            form="filterForm"
          >
            Aplicar
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
