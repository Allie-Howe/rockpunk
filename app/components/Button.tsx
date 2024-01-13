import { PropsWithChildren } from 'react';

export const Button = ({children}: PropsWithChildren) => (
  <button type="submit" className='bg-white hover:bg-red-500 text-black rounded-md px-5 py-2'>
    {children}
  </button>
)
