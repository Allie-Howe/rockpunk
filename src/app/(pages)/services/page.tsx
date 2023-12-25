import { PlaceholderImage, PlaceholderText } from '@/app/placeholders';
import { Header } from '../utils';

export default function Services() {
  return <>
    <Header title='services' />
    <div className='grid md:grid-cols-2 gap-7'>
      <PlaceholderText />
      <PlaceholderImage />
    </div>
  </>
}
