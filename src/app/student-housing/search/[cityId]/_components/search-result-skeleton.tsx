import LocaleSearchForm from '@/components/forms/locale-search-form'

import { Skeleton } from '@/components/shadcnui/skeleton'
import { Page } from '@/components/layout/page'

export default function SearchResultSkeleton() {
  return (
    <Page.Container>
      <Page.Header>
        <LocaleSearchForm />
      </Page.Header>

      <Page.Content>
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
      </Page.Content>
    </Page.Container>
  )
}
