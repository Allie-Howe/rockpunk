import { PropsWithChildren } from 'react';

export const LoginRegisterGrid = ({children}: PropsWithChildren) => (
  <div className='container lg:px-32'>
      <div className='grid grid-cols-2 gap-4'>
        {children}
      </div>
  </div>
)
