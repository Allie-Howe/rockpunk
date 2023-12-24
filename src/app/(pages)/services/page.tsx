import Image from 'next/image';
import { PlaceholderText } from '@/app/placeholders';
import { Header } from '../utils';

const PLACEHOLDER_WIDTH = 360
const PLACEHOLDER_HEIGHT = 360

export default function Services() {
  return <>
    <Header title='services' />
    <div className='grid grid-cols-2 gap-7'>
    <PlaceholderText />
      <div className='flex w-full justify-center'>
        <div>
          <Image
            alt='Placeholder'
            src={`https://dummyimage.com/${PLACEHOLDER_WIDTH}x${PLACEHOLDER_HEIGHT}/fff/aaa`}
            width={PLACEHOLDER_WIDTH}
            height={PLACEHOLDER_HEIGHT}
            />
        </div>
      </div>
    </div>
  </>
}
