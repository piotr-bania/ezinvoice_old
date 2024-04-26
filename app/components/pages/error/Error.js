import './error.scss'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

const Error_Component = () => {
    return (
        <div className='error_component'>
            <h1>404</h1>
            <p>Sorry, something went wrong!</p>
            <Button className='cta' color='primary' radius='sm' variant='shadow'>
                <Link href='/'>Go to Home page</Link>
            </Button>
        </div>
    )
}

export default Error_Component