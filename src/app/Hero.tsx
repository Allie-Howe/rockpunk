/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vpqvXBASncy
 */
import Image from 'next/image'
import Link from "next/link"
import { belanosima } from './page';

const PLACEHOLDER_WIDTH = 550;
const PLACEHOLDER_HEIGHT = 550;


export default function Hero() {
  return (<>
    <section
      className={`w-full pt-12 bg-red-500 ${belanosima.className}`}
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            alt="Hero"
            className="mx-auto aspect-video rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square z-10"
            height={PLACEHOLDER_HEIGHT}
            src={`https://dummyimage.com/${PLACEHOLDER_WIDTH}x${PLACEHOLDER_HEIGHT}/fff/aaa`}
            width={PLACEHOLDER_WIDTH}
          />
          <div className="flex flex-col justify-center space-y-4 text-white">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">rock punk</h1>
              <p className="max-w-[600px]">a unique bouldering studio in the heart of Norwich.</p>
              <p className="max-w-[600px]">inspired by Japanese &apos;hole in the wall&apos; style micro gyms.</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-red-500 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Get Started
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-red-500 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <svg className='md:-translate-y-10' id="visual" viewBox="0 0 900 250" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 154L37.5 168.8C75 183.7 150 213.3 225 214C300 214.7 375 186.3 450 151.5C525 116.7 600 75.3 675 61.7C750 48 825 62 862.5 69L900 76L900 0L862.5 0C825 0 750 0 675 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z" fill="rgb(239 68 68)" strokeLinecap="round" strokeLinejoin="miter"></path></svg>  </>)
}
