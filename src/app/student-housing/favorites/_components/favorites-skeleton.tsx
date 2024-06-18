import SearchInput from '@/components/common/search-input'
import { Skeleton } from '@/components/ui/skeleton'

export default function FavoritesSkeleton() {
  return (
    <div className="h-screen px-12 py-10">
      <SearchInput placeholder="Buscar por nome do anúncio..." />
      <div className="mt-10 flex flex-col pb-8">
        <div>
          <Skeleton className="h-6 w-48" />
          <Skeleton className="mt-2 h-5 w-56" />
        </div>

        <ul
          className="mt-8 grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          }}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <li key={index}>
              <Skeleton className="h-[340px] w-full" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
