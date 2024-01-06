import Hero from './Hero';
import InstagramIcon from 'mdi-react/InstagramIcon'
import FacebookIcon from 'mdi-react/FacebookIcon'
import { MdiReactIconProps } from 'mdi-react';

const responsiveContainer = 'px-3 md:px-10'

export default function Main() {
  return <main className={`flex min-h-screen flex-col`}>
    <Hero />
    <RockSection />
    <Footer />
  </main>
}

const RockSection = () => {
  return (<>
    <div className='bg-red-500'>
      <svg id="visual" viewBox="0 0 900 350" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 310L225 195L450 316L675 97L900 245L900 0L675 0L450 0L225 0L0 0Z" fill="#1f2937" strokeLinecap="square" strokeLinejoin="bevel"></path></svg>
    </div>
    <div className={`bg-red-500 ${responsiveContainer}`}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ducimus laborum iusto, similique odit quos tempore placeat atque ab illum aspernatur? Numquam sint itaque voluptates aperiam sit ratione repudiandae obcaecati.
    </div>
    <svg className='-translate-y-1' id="visual" viewBox="0 0 900 350" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 310L225 195L450 316L675 97L900 245L900 0L675 0L450 0L225 0L0 0Z" fill="#ef4444" strokeLinecap="square" strokeLinejoin="bevel"></path></svg>
  </>)
}

const Footer = () => {
  const iconProps: MdiReactIconProps = {
    size: 80,
    className: 'hover:text-gray-300 cursor-pointer'
  }
  return (
    <footer className={`flex flex-col gap-10 ${responsiveContainer}`}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus quas maxime culpa officiis ipsa quis quod dignissimos vel dolor aliquam tempore in sit, sequi ea nisi nostrum doloribus. Ducimus!</p>
      <div className='flex justify-center'>
        <a href="http://www.instagram.com/rockpunkclimbing" target='_blank'>
          <InstagramIcon {...iconProps} />
        </a>
        <a href="https://www.facebook.com/rockpunknorwich" target='_blank'>
          <FacebookIcon {...iconProps} />
        </a>
      </div>
    </footer>
  )
}
