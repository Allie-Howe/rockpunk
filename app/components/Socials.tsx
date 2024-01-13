import { MdiReactIconProps } from 'mdi-react'
import FacebookIcon from 'mdi-react/FacebookIcon'
import InstagramIcon from 'mdi-react/InstagramIcon'

export const Socials = ({className, ...props}: MdiReactIconProps) => {
  const baseStyles = `hover:text-gray-300 ${className}`
  return <>
    <a href="http://www.instagram.com/rockpunkclimbing" target='_blank'>
      <InstagramIcon className={baseStyles} {...props} />
    </a>
    <a href="https://www.facebook.com/rockpunknorwich" target='_blank'>
      <FacebookIcon className={baseStyles} {...props} />
    </a>
  </>
}
