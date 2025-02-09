'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'
import { NextUIProvider } from '@nextui-org/system'
import { UserProvider } from '@/context/user-context'

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </UserProvider>
    </QueryClientProvider>
  )
}
