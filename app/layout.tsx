import AuthProvider from '@/provider/auth-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import EditModal from '@/components/modals/edit-modal'
import getCurrentUser from './actions/getCurrentUser'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Study share',
  description: 'Share what you study',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
