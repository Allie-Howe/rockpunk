import { Input } from '../../components/Input'
import { LoginRegisterGrid } from './LoginRegisterGrid'
import { NavLink } from '../../components/NavLink'

export const LoginForm = () => {
  return <>
    <form action="">
      <div className='flex flex-col gap-10'>
        <LoginRegisterGrid>
          <label htmlFor='email'>Email:</label>
          <Input id='email' />
          <label htmlFor='password'>Password:</label>
          <Input id='password' />
        </LoginRegisterGrid>
        <div className='flex justify-center gap-2 items-center'>
          <button type="submit" className='bg-white hover:bg-red-500 text-black rounded-md px-5 py-2'>Login</button>
          <p>or <NavLink href='/register'>Register</NavLink></p>
        </div>
      </div>
    </form>
  </>
}
