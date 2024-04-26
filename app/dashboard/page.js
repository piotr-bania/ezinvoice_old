import { redirect } from 'next/navigation'
import { createClient } from '../utils/supabase/server'
import Dashboard from '../components/pages/dashboard/Dashboard'

export default async function Dashboard_Page() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return (
        <section id='dashboard_page' className='bg-background'>
            <Dashboard />
        </section>
    )
}