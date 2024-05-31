import { Input } from '@/components/ui/input'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

interface SearchBoxProps {
  className?: string
}

export default function SearchBox({ className }: SearchBoxProps) {
  return (
    <div
      className={`${className} border-border flex h-14 flex-1 items-center rounded-xl border bg-white px-3`}
    >
      <MagnifyingGlass size={32} className="text-placeholder" />
      <Input
        className="placeholder:text-placeholder border-none focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Pesquisar por cidade"
      />
    </div>
  )
}
