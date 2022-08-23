import { Link } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to='/' className="nav-link" id="about"><div>About</div></Link>
            <Link to='events' className="nav-link"><div>Events</div></Link>
            <Link to='learn' className="nav-link"><div>Learn</div></Link>
            <Link to='team' className="nav-link"><div>Team</div></Link>
            <Link to='contact' className="nav-link"><div>Contact</div></Link>
        </div>
    )
}

export default NavBar