import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export const Input = (props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => (
  <input className='text-black p-0.5 rounded-md' {...props} />
)
