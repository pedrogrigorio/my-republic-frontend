import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/layout/Sidebar'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'myRepublic',
  description: 'Encontre sua república estudantil',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="w-full bg-gray-100">{children}</main>
        </div>
      </body>
    </html>
  )
}
