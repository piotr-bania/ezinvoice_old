import './dashboard.scss'
import Sidebar from '../../layout/Sidebar'
import Table_Component from './Table_Component'

const Dashboard = () => {
    return (
        <>
            <Sidebar />

            {/* <div className='heading'>
                <h1>Welcome to your Dashboard</h1>
            </div> */}

            <Table_Component />
        </>
    )
}

export default Dashboard