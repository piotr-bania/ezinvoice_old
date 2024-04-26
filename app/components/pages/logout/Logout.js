import './logout.scss'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

const Logout_Component = () => {
    return (
        <>
            <div className='logout_component'>
                <p>You are now logged out.</p>
                <Button className='cta' color='primary' radius='sm' variant='shadow'>
                    <Link href='/'>Go to Home page</Link>
                </Button>
            </div>
        </>
    )
}

export default Logout_Component