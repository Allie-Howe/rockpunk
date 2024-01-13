import { Header } from '../utils';
import { LoginForm } from './LoginForm';

export default function Login() {
  return <>
    <Header title='Login' />
    <div className='flex flex-col gap-10'>
      <LoginForm />
    </div>
  </>
}
