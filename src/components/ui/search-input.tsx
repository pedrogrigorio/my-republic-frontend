import { Input } from '@/components/shadcnui/input'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { ChangeEvent } from 'react'

interface SearchBoxProps {
  className?: string
  placeholder?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function SearchInput(props: SearchBoxProps) {
  const { className, placeholder, value, onChange } = props

  return (
    <div
      className={`${className} flex h-full flex-1 items-center rounded-xl border border-primary bg-white px-3`}
    >
      <MagnifyingGlass size={32} className="text-placeholder" />
      <Input
        className="border-none placeholder:text-placeholder focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
