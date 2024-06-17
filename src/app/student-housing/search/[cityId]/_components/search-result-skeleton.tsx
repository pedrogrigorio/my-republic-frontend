import LocaleSearchForm from '@/components/forms/locale-search-form'
import { Skeleton } from '@/components/ui/skeleton'

export default function SearchResultSkeleton() {
  return (
    <div className="h-screen px-12 py-10">
      <LocaleSearchForm />
      <div className="mt-10 flex flex-col pb-8">
        <div className="flex items-center justify-between">
          <div>
            <Skeleton className="h-6 w-48" />
            <Skeleton className="mt-2 h-5 w-56" />
          </div>
          <Skeleton className="h-10 w-28" />
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
