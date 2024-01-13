import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

export const NavLink = ({children, className, ...props}: PropsWithChildren<LinkProps & {className?: string}>) => {
  return (<Link
    className={`opacity-70 my-1 text-sm hover:text-red-500 md:my-0 ${className}`}
    {...props}
  >
    {children}
  </Link>)
}
