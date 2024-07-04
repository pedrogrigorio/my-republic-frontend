import SearchInput from '@/components/common/search-input'

import { Skeleton } from '@/components/ui/skeleton'
import { Page } from '@/components/layout/page'

export default function FavoritesSkeleton() {
  return (
    <Page.Container>
      <Page.Header>
        <SearchInput placeholder="Buscar por nome do anúncio..." />
      </Page.Header>

      <Page.Content>
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
      </Page.Content>
    </Page.Container>
  )
}
