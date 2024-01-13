import Hero from './Hero';
import InstagramIcon from 'mdi-react/InstagramIcon'
import FacebookIcon from 'mdi-react/FacebookIcon'
import { MdiReactIconProps } from 'mdi-react';
import { PropsWithChildren } from 'react';
import { belanosima } from './fonts';

const responsiveContainer = 'px-3 md:px-10'
const Header = ({title}: {title: string}) => <h3 className={`text-8xl ${belanosima.className}`}>{title}</h3>


export default function Main() {
  return <main className={`flex min-h-screen flex-col`}>
    <Hero />
    <RockSection>
      <div className='grid gap-5 md:grid-cols-2'>
        <div>
          <Header title='location' />
          <div className='text-gray-200'>
            <p>26A Magdalen Street</p>
            <p>Norwich</p>
            <p>NR3 1HU</p>
          </div>
        </div>
        <div className='bg-red-400 md:h-auto h-56'>
          <div className='h-full flex justify-center items-center'>
            map goes here
          </div>
        </div>
      </div>
    </RockSection>
    <div className={`${responsiveContainer}`}>
      <Header title='reviews' />
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ducimus laborum iusto, similique odit quos tempore placeat atque ab illum aspernatur? Numquam sint itaque voluptates aperiam sit ratione repudiandae obcaecati.
    </div>
    <RockSection>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ducimus laborum iusto, similique odit quos tempore placeat atque ab illum aspernatur? Numquam sint itaque voluptates aperiam sit ratione repudiandae obcaecati.
    </RockSection>
    <Footer />
  </main>
}

const RockSection = ({children}: PropsWithChildren) => {
  return (<>
    <div className='bg-red-500'>
      <svg id="visual" viewBox="0 0 900 350" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 310L225 195L450 316L675 97L900 245L900 0L675 0L450 0L225 0L0 0Z" fill="#1f2937" strokeLinecap="square" strokeLinejoin="bevel"></path></svg>
    </div>
    <div className={`bg-red-500 ${responsiveContainer}`}>
      {children}
    </div>
    <svg className='-translate-y-1' id="visual" viewBox="0 0 900 350" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 310L225 195L450 316L675 97L900 245L900 0L675 0L450 0L225 0L0 0Z" fill="#ef4444" strokeLinecap="square" strokeLinejoin="bevel"></path></svg>
  </>)
}

const Footer = () => {
  return (
    <footer className={`flex flex-col gap-10 ${responsiveContainer}`}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus quas maxime culpa officiis ipsa quis quod dignissimos vel dolor aliquam tempore in sit, sequi ea nisi nostrum doloribus. Ducimus!</p>
      <div className='flex justify-center'>
        <Socials size={80} className='cursor-pointer' />
      </div>
    </footer>
  )
}

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
