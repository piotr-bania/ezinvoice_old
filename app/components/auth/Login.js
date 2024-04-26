import './login.scss'
import { login } from './actions'
import Link from 'next/link'

const Login = () => {
    return (
        <>
            <div className='login_component bg-white max-w-full w-[340px] rounded-2xl p-4'>
                <h2 className='p-1 text-center'>Sign in</h2>
                
                <form className='flex flex-col gap-2'>
                    <label htmlFor='email' className='w-full text-base text-text_primary'>Email:</label>
                    <input id='email' name='email' type='email' placeholder='Enter your email' required className='bg-neutral-100 text-text_primary text-sm rounded-md w-full px-4 py-2'/>
                    <label htmlFor='password' className='w-full text-base text-text_primary'>Password:</label>
                    <input id='password' name='password' type='password' placeholder='Enter your password' required className='bg-neutral-100 text-text_primary text-sm rounded-md w-full px-4 py-2'/>
                    
                    <div className='cta w-full mt-2'>
                        <button className='button_primary full_width' formAction={login}>Login</button>

                        <p className='text-heading_secondary text-center text-sm mt-4'>Need to create an account?{" "}
                        <Link href='/signup' className='text-primary-500 text-sm'>Sign up</Link></p>
                    </div>
                </form>
            </div>

            <div className='back_home'>
                <Link className='text-sm' href='/'>← To Home Page</Link>
            </div>
        </>
    )
}

export default Login