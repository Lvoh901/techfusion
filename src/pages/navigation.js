import { NavLink } from "react-router-dom";
import myLogo from '../images/logo.png';

const Navbar = () => {
    return (
        <div className="navigation-bar container-fluid">
            <nav className="navbar">
                <ul className="nav-bar">
                    <img src={myLogo} alt="logo" />
                    <NavLink exact to="/" >Blog</NavLink>
                    <NavLink to="/upcoming" >Upcoming</NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;