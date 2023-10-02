import { NavLink } from "react-router-dom";
import myLogo from '../images/logo.png';

const Navbar = () => {
    return (
        <div className="navigation-bar container">
            <nav className="navbar">
                <ul className="logo">
                    <img src={myLogo} alt="logo" />
                </ul>

                <ul className="navlinks">
                    <NavLink exact to="/" >Blog</NavLink>
                    <NavLink to="/upcoming" >Upcoming</NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;