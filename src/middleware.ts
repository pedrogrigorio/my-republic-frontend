import { NextRequest, NextResponse } from 'next/server'
import { getSession } from './lib/auth'

export default async function middleware(req: NextRequest) {
  const protectedRoutes = [
    '/my-ads',
    '/settings',
    '/student-housing/applications',
  ]
  const currentPath = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(currentPath)

  if (isProtectedRoute) {
    const session = await getSession()

    if (!session) {
      return NextResponse.redirect(new URL('/', req.nextUrl))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
