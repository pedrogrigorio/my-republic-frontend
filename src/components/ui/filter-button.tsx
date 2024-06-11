import { Faders } from '@phosphor-icons/react/dist/ssr'
import { Button } from './button'

export default function FilterButton() {
  return (
    <Button className="flex gap-2 bg-button-filter px-6 hover:bg-button-filter-hover">
      <Faders size={20} />
      Filtro
    </Button>
  )
}
