import { Header } from '../utils';
import { PlaceholderImage, PlaceholderText } from '../../placeholders';

export default function About() {
  return <>
    <Header title='about us' />
    <div className='grid md:grid-cols-2 gap-7'>
      <PlaceholderImage />
      <PlaceholderText />
    </div>
  </>
}
