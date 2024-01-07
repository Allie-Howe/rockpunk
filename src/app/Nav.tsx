'use client'

import Link, {LinkProps} from 'next/link'
import { PropsWithChildren, useState } from 'react'
import logo from './qrink_logo.png'
import Image from 'next/image'

/**
 * v0 by Vercel.
 * Iterated and adapted by Allie.
 * @see https://v0.dev/t/DbY9DS6A6S1
 */

const NavLink = ({children, ...props}: PropsWithChildren<LinkProps>) => {
  return (<Link
    className={`my-1 text-sm hover:text-red-500 md:mx-4 md:my-0`}
    {...props}
  >
    {children}
  </Link>)
}

export const Nav = () => {
  const [visibility, setVisibility] = useState('hidden');

  const onToggle = () => setVisibility(p => p ? '': 'hidden');

  return (<>
    <nav className="bg-gray-700  shadow-xl fixed left-0 right-0 z-20">
      <div className='flex flex-col'>
        <div className='flex justify-between md:justify-start md:gap-10 text-black bg-yellow-200 py-1 px-3'>
          <p><b>this site is not real.</b></p>
          <p>looks nice though, don&apos;t you think?</p>
        </div>
        <div className="container text-white px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <Link
                className="text-2xl font-bold lg:text-3xl hover:opacity-75 duration-200"
                href="/"
              >
                <div className='flex text-red-500'>
                <div>⬤</div>
                <div style={{fontSize: '2.5rem', translate: '0 .25rem', margin: '0 -.5rem'}}>▲</div>
                </div>
              </Link>
            </div>
            <div className="flex md:hidden">
              <button
                aria-label="toggle menu"
                className="hover:text-gray-600 focus:outline-none focus:text-gray-600"
                type="button"
                onClick={onToggle}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={`${visibility} items-center md:flex`}>
            <div className="flex flex-col md:flex-row md:mx-6">
              <NavLink href='/'>Home</NavLink>
              <NavLink href='/about'>About</NavLink>
              <NavLink href='/services'>Services</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div className='p-11' />
  </>)
}
