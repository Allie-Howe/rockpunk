'use client'

import { LoginRegisterGrid } from '../login/LoginRegisterGrid'
import { NavLink } from '../../components/NavLink'
import { useFormState } from 'react-dom'
import { register } from '../../lib/actions'
import { EmailInput, PasswordInput } from '../login/LoginForm'
import { Input } from '../../components/Input'

export const RegisterForm = () => {
  const [errorMsg, dispatch] = useFormState(register, undefined)

  return <>
    <form action={dispatch}>
      <div className='flex flex-col gap-10'>
        <LoginRegisterGrid>
        <label htmlFor='name'>Name:</label>
        <Input
          required
          id='name'
          name='name'
          type='name'
          placeholder='Enter your name here...'
        />
          <EmailInput />
          <PasswordInput />
          <PasswordInput confirmation />
        </LoginRegisterGrid>
        <div className='flex justify-center gap-2 items-center'>
          <button type="submit" className='bg-white hover:bg-red-500 text-black rounded-md px-5 py-2'>Register</button>
          <p>or <NavLink href='/login'>Login</NavLink></p>
        </div>
        <p>{errorMsg}</p>
      </div>
    </form>
  </>
}
