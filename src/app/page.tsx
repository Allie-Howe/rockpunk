import { Nav } from './Nav';
import Hero from './Hero';

export default function Main() {
  return <main className="flex min-h-screen flex-col bg-blue-100">
    <Nav />
    <Hero />
  </main>
}
