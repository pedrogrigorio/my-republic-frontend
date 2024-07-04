import {
  Breadcrumb as Root,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Fragment } from 'react'

interface Page {
  name: string
  path: string
}

interface BreadCrumbProps {
  parents: Page[]
  currentPage: string
}

export default function Breadcrumb({ parents, currentPage }: BreadCrumbProps) {
  return (
    <Root>
      <BreadcrumbList>
        {parents.map((parent, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink href={parent.path}>{parent.name}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}

        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Root>
  )
}
