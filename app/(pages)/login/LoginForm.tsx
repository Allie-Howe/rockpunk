'use client'

import { Input } from '../../components/Input'
import { LoginRegisterGrid } from './LoginRegisterGrid'
import { NavLink } from '../../components/NavLink'
import { useFormState } from 'react-dom'
import { authenticate } from '../../lib/actions'

export const LoginForm = () => {
  const [errorMsg, dispatch] = useFormState(authenticate, undefined)

  return <>
    <form action={dispatch}>
      <div className='flex flex-col gap-10'>
        <LoginRegisterGrid>
          <label htmlFor='email'>Email:</label>
          <Input
            required
            id='email'
            name='email'
            type='email'
          />
          <label htmlFor='password'>Password:</label>
          <Input
            required
            id='password'
            name='password'
            type='password'
            minLength={8}
          />
        </LoginRegisterGrid>
        <div className='flex justify-center gap-2 items-center'>
          <button type="submit" className='bg-white hover:bg-red-500 text-black rounded-md px-5 py-2'>Login</button>
          <p>or <NavLink href='/register'>Register</NavLink></p>
        </div>
        <p>{errorMsg}</p>
      </div>
    </form>
  </>
}
