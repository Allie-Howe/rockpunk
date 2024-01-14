import { Header } from '../utils';
import { LoginRegisterGrid } from '../login/LoginRegisterGrid';
import { NavLink } from '../../components/NavLink';
import { Input } from '../../components/Input';
import { EmailInput, PasswordInput } from '../login/LoginForm';

export default function Register() {
  return <>
    <Header title='Register' />
    <div className='flex flex-col gap-10'>
      <LoginRegisterGrid>
        <EmailInput />
        <PasswordInput />
        <PasswordInput confirmation />
      </LoginRegisterGrid>
      <div className='flex justify-center gap-2 items-center'>
        <button type="submit" className='bg-white hover:bg-red-500 text-black rounded-md px-5 py-2'>Register</button>
        <p>or <NavLink href='/login'>Login</NavLink></p>
      </div>
    </div>
  </>
}
