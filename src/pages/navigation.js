import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navigation-bar">
            <nav className="navbar">
                <ul>
                    <li className="nav-item">
                        <NavLink exact to="/" >Blog</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/upcoming" >Upcoming</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;