import { Belanosima } from 'next/font/google'
import Hero from './Hero';

export const belanosima = Belanosima({ weight: ['400', '600'], subsets: ['latin'] })

export default function Main() {
  return <main className="flex min-h-screen flex-col">
    <Hero />
  </main>
}
