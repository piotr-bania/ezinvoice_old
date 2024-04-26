import { Button } from '@nextui-org/react'
import Link from 'next/link'

const Homepage_Section = () => {
    return (
        <>
            <h1 className='heading'>
                Simplify Your Invoice Management
            </h1>

            <h2 className='subheading'>
                A Personal Touch in Every Transaction
            </h2>

            <p className='paragraph'>
                I remember the time I was overwhelmed with piles of invoices, each one a thread in the tapestry of my business's story. That's why I built EzInvoice — not just as a tool, but as a sanctuary where your efforts are neatly organized, and your achievements are beautifully displayed.
                <br /><br />
                From the simplicity of creating and managing invoices to the security of having them all stored in one place, I've crafted each feature with the intention of bringing calm to the chaos of financial management. No more hunting for lost invoices or wondering about payment statuses.
                <br /><br />
                With just a few clicks, you can send your personalized invoices through various mediums, tag their payment statuses, and visualize your financial health with stunning 3D charts. It’s your financial dashboard, reimagined  — because I believe that managing your business finances should be straightforward and stress-free.
            </p>

            <Button className='cta' color='primary' radius='sm' variant='shadow'>
                <Link href='/login'>
                    Start Simplifying Today
                </Link>
            </Button>
        </>
    )
}

export default Homepage_Section