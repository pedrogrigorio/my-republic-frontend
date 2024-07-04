import { Page } from '@/components/layout/page'
import { Skeleton } from '@/components/ui/skeleton'

export default function AdvertisementSkeleton() {
  return (
    <Page.Container>
      <Page.Header>
        <Skeleton className="h-6 w-1/4" />
      </Page.Header>

      <Page.Content>
        {/* Main content */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-5 2xl:grid-cols-2">
          {/* Image */}
          <div className="group relative xl:col-span-3 2xl:col-span-1">
            <Skeleton className="aspect-video"></Skeleton>

            <Skeleton className="absolute -bottom-8 h-6 w-full" />
          </div>

          <div className="mt-8 flex flex-col gap-4 xl:col-span-2 xl:mt-0 2xl:col-span-1">
            {/* Title */}
            <div className="flex items-start justify-between gap-4">
              <Skeleton className="h-8 flex-1" />
              <Skeleton className="h-8 w-8" />
            </div>

            {/* Locale */}
            <div className="mt-1 flex items-center gap-2 font-medium">
              <Skeleton className="h-6 w-6" />
              <Skeleton className="h-6 w-32" />
            </div>

            {/* Price */}
            <Skeleton className="flex-1 rounded-xl" />

            {/* Vacancies */}
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-8 w-64" />
              </div>
            </div>

            {/* Apply button */}
            <Skeleton className="h-12 w-full" />
          </div>
        </div>

        {/* Details sections */}
        <div className="mt-12 xl:mt-14">
          <section className="flex flex-col gap-4 pb-8 pt-5">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </section>

          <div className="h-[1px] w-full bg-divisor" />

          <section className="flex flex-col gap-4 pb-8 pt-5">
            <Skeleton className="h-6 w-32" />
            <div
              className="grid grid-cols-3 gap-y-8"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr)',
              }}
            >
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Skeleton className="h-5 w-5" />
                  <Skeleton className="h-5 w-32" />
                </div>
              ))}
            </div>
          </section>

          <div className="h-[1px] w-full bg-divisor" />

          <section className="flex flex-col gap-4 pb-8 pt-5">
            <Skeleton className="h-6 w-32" />
            <ul className="flex flex-col gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={index} className="flex gap-2">
                  <Skeleton className="h-6 w-6" />
                  <Skeleton className="h-6 w-32" />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Page.Content>
    </Page.Container>
  )
}
