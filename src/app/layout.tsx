import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

import './globals.css'
import { Nav } from './Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Qrink',
  description: 'Drink with Qrink',
}

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-100`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
