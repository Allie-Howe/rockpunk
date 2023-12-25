import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

import './globals.css'
import { Nav } from './Nav'
import { cols } from '../utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Qrink',
  description: 'Drink with Qrink',
}

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-${cols.bg}`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
