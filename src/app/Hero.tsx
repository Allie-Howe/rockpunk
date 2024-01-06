/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vpqvXBASncy
 */
import Image from 'next/image'
import Link from "next/link"
import { belanosima } from './fonts';

const PLACEHOLDER_WIDTH = 550;
const PLACEHOLDER_HEIGHT = 550;


export default function Hero() {
  return (<>
    <section
      className={`w-full -mb-16 pt-12 ${belanosima.className}`}
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
              <h1 className="font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">rock punk</h1>
              <p className="text-2xl max-w-[600px]">a unique bouldering studio in the heart of Norwich.</p>
              <p className="text-2xl max-w-[600px]">inspired by Japanese &apos;hole in the wall&apos; style micro gyms.</p>
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
    </>)
}
