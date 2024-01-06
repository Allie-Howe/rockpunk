import Hero from './Hero';

export default function Main() {
  return <main className={`flex min-h-screen flex-col`}>
    <Hero />
    <NewSection />
  </main>
}

const NewSection = () => {
  return (<>
    <div className='bg-red-500'>
      <svg id="visual" viewBox="0 0 900 350" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 310L225 195L450 316L675 97L900 245L900 0L675 0L450 0L225 0L0 0Z" fill="#1f2937" strokeLinecap="square" strokeLinejoin="bevel"></path></svg>
    </div>
    <div className='bg-red-500 text-white px-5'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ducimus laborum iusto, similique odit quos tempore placeat atque ab illum aspernatur? Numquam sint itaque voluptates aperiam sit ratione repudiandae obcaecati.
    </div>
    <svg className='-translate-y-1' id="visual" viewBox="0 0 900 350" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 310L225 195L450 316L675 97L900 245L900 0L675 0L450 0L225 0L0 0Z" fill="#ef4444" strokeLinecap="square" strokeLinejoin="bevel"></path></svg>
  </>)
}
