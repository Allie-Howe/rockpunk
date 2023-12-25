import { Header } from '../utils';
import { PlaceholderImage, PlaceholderText } from '@/app/placeholders';

export default function About() {
  return <>
    <Header title='about us' />
    <div className='grid grid-cols-2 gap-7'>
      <PlaceholderImage />
      <PlaceholderText />
    </div>
  </>
}
