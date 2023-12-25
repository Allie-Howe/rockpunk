import Image from 'next/image';
import { Header } from '../utils';

const PLACEHOLDER_WIDTH = 360
const PLACEHOLDER_HEIGHT = 360

export default function About() {
  return <>
    <Header title='about us' />
    <div className='grid grid-cols-2 gap-7'>
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
      <div className='flex flex-col gap-3'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates excepturi repellat rem optio mollitia unde quia, iure sit aliquam dignissimos obcaecati similique natus quasi adipisci accusantium quod provident nemo nulla.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ad eveniet dolorem, explicabo ipsum quaerat, repellat inventore fuga aperiam qui iste eum minima veritatis molestiae odio tenetur similique voluptate autem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit blanditiis, incidunt repudiandae sint ut iure distinctio! Velit fugit nesciunt et commodi, inventore nobis error quis modi omnis suscipit molestiae voluptatem, aut unde animi eaque assumenda illo? Itaque ab, dolorem repellat consequuntur unde odit, eaque beatae animi illo esse voluptatem quia, autem aperiam. Debitis natus fugiat aspernatur, sequi modi quibusdam aliquid facilis voluptas, officiis optio architecto quam tempora cum ipsa quidem illum eligendi? Enim temporibus minus consectetur quibusdam. Aspernatur, tempora rerum a, nam quo accusantium corrupti explicabo voluptates perferendis ullam illo minus sed deleniti eum perspiciatis! Veritatis ex odio doloremque commodi.</p>
      </div>
    </div>
  </>
}
