import SearchInput from '@/components/ui/search-input'
import { Page } from '@/components/layout/page'
import { Skeleton } from '@/components/shadcnui/skeleton'

export default function MyAdsSkeleton() {
  return (
    <Page.Container>
      <Page.Header>
        <SearchInput placeholder="Buscar por nome do anúncio..." />
      </Page.Header>

      <Page.Content>
        <div className="flex items-center justify-between">
          <div>
            <Skeleton className="h-6 w-48" />
            <Skeleton className="mt-2 h-5 w-56" />
          </div>
          <Skeleton className="h-10 w-32" />
        </div>
        <div className="border-border-primary mt-4 border-b">
          <div className="h-10" />
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
      </Page.Content>
    </Page.Container>
  )
}
