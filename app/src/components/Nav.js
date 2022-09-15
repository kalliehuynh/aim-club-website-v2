import { Link } from "react-router-dom"
import useWindowDimensions from "../hooks/useWindowDimensions"
import Dropdown from "./Dropdown"
import './Nav.css'


const NavBar = () => {
    return (
        <div className="navbar">
            <Link to='/' className="nav-link" id="about" tabIndex={0}><div>About</div></Link>
            <Link to='events' className="nav-link" tabIndex={0}><div>Events</div></Link>
            <Link to='team' className="nav-link" tabIndex={0}><div>Team</div></Link>
            <Link to='contact' className="nav-link" tabIndex={0}><div>Contact</div></Link>
            <Link to='learn' className="nav-link" tabIndex={0}><div>Learn</div></Link>
        </div>
    )
}

const Nav = () => {
    const { width } = useWindowDimensions()
    if (width <= 700) {
        return <Dropdown />
    }
    return <NavBar />
}

export default Nav