import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

export const NavLink = ({children, ...props}: PropsWithChildren<LinkProps>) => {
  return (<Link
    className={`my-1 text-sm hover:text-red-500 md:mx-4 md:my-0`}
    {...props}
  >
    {children}
  </Link>)
}
