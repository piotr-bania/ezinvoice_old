import '../pages/logout/logout.scss'
import { logout } from './actions'

const Logout = () => {
    return (
        <div className='logout_component'>
            <form>
                <button className='button_primary full_width' formAction={logout}>Logout</button>
            </form>
        </div>
    )
}

export default Logout