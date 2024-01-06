import type { Metadata } from 'next'
import { Belanosima, Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

import './globals.css'
import { Nav } from './Nav'
import { belanosima, inter } from './fonts'

export const metadata: Metadata = {
  title: 'Qrink',
  description: 'Drink with Qrink',
}

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-800`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
