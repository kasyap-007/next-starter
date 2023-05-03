import { cn } from '@/lib/utils'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Next Starter template',
  description: 'Opinionated Next.js starter template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          'bg-background font-sans text-foreground'
        )}
      >
        {children}
      </body>
    </html>
  )
}
