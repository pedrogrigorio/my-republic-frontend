import SearchInput from '@/components/common/search-input'
import { Skeleton } from '@/components/ui/skeleton'

export default function ApplicationsSkeleton() {
  return (
    <div className="h-screen px-12 py-10">
      <SearchInput placeholder="Buscar por nome do anúncio..." />
      <div className="mt-10 flex flex-col text-strong">
        <div>
          <Skeleton className="h-6 w-56" />
          <Skeleton className="mt-2 h-5 w-48" />
        </div>

        {/* Advertisements */}
        <ul>
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="relative flex gap-3 py-3" key={index}>
              <Skeleton className="h-32 w-56" />
              <div className="flex flex-col justify-between py-2">
                <div>
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="mt-2 h-4 w-32" />
                </div>
                <Skeleton className="h-6 w-24" />
              </div>
              <div className="absolute right-10 top-1/2 flex h-fit -translate-y-1/2 gap-3">
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-8 w-8" />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
