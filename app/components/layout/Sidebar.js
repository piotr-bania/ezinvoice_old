import Link from 'next/link'
import Image from 'next/image'
import Logout from '../auth/Logout'
import Modal_Client from '../ui/modals/Modal_Client'

const Sidebar = () => {
    return (
        <section className='sidebar shadow-md'>
            <div className='logo'>
                <h3>EzInvoice</h3>
            </div>
            <hr />
            <div className='navigation_links'>
                <div>
                    <Image src='/svg/dashboard.svg' alt='user' width={22} height={22} />
                    <Link href='/' className='text-primary-500'>Dashboard</Link>
                </div>
                <div>
                    <Image src='/svg/invoices.svg' alt='invoices' width={22} height={22} />
                    <Link href='/' className='text-primary-500'>Invoices</Link>
                </div>
                <div>
                    <Image src='/svg/reports.svg' alt='estimates' width={22} height={22} />
                    <Link href='/' className='text-primary-500'>Reports</Link>
                </div>
                <div>
                    <Image src='/svg/clients.svg' alt='clients' width={22} height={22} />
                    <Link href='/' className='text-primary-500'>Clients</Link>
                </div>
                <Modal_Client />
            </div>
            <hr />
            <div className='finantial_overview'>
                <div>
                    <Image src='/svg/receivables.svg' alt='finances' width={22} height={22} />
                    <Link href='/' className='text-primary-500'>Receivables</Link>
                </div>
                <div>
                    <Image src='/svg/payables.svg' alt='finances' width={22} height={22} />
                    <Link href='/' className='text-primary-500'>Payables</Link>
                </div>
                <div>
                    <Image src='/svg/recent_activity.svg' alt='finances' width={22} height={22} />
                    <Link href='/' className='text-primary-500'>Recent Activity</Link>
                </div>
            </div>
            <hr />
            <div className='settings_and_configuration'>
                <div>
                    <Image src='/svg/settings.svg' alt='settings' width={22} height={22} />
                    <Link href='/' className='text-primary-500'>General Settings</Link>
                </div>
                <div>
                    <Image src='/svg/notifications.svg' alt='settings' width={22} height={22} />
                    <Link href='/' className='text-primary-500'>Notification Settings</Link>
                </div>
            </div>
            <hr />
            <div className='support_and_documentation'>
                <div>
                    <Image src='/svg/help_center.svg' alt='support' width={22} height={22} />
                    <Link href='/' className='text-primary-500'>Help Center</Link>
                </div>
                <div>
                    <Image src='/svg/feedback.svg' alt='support' width={22} height={22} />
                    <Link href='/' className='text-primary-500'>Feedback</Link>
                </div>
            </div>
            <hr />
            <Logout />
        </section>
    )
}

export default Sidebar