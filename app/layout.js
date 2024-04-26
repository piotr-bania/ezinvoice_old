import './globals.css'
import './globals.scss'
import { Inter } from 'next/font/google'
import { Providers } from '@/providers'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "EzInvoice.co.uk - Streamlined Invoicing for Freelancers and Small Businesses",
    description: "EzInvoice.co.uk simplifies your invoicing process with easy-to-use templates, client management, and customizable features, making it the perfect tool for freelancers and small businesses looking to streamline their financial workflows. Sign up today and transform how you manage your invoices!",
}

export default function RootLayout({ children }) {
    return (
        <html lang='en' className='light'>
            <body className={inter.className} suppressHydrationWarning>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
