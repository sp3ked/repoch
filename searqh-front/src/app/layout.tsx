import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search Page',
  description: 'A simple search interface',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}