import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import './globals.css'
import { Nav } from './Nav'
import { inter } from './fonts'

export const metadata: Metadata = {
  title: 'rock punk',
  description: 'rock punk, a unique bouldering studio in the heart of Norwich',
}

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-800 text-white`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
