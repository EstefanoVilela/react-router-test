import { NavLink } from "react-router-dom";
import './Navbar.css'

export const Navbar = () => (
    <div className="">
        <ul>
            <li>
                <NavLink to='/' className={ ({ isActive }) =>  isActive ? "active" : ""}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink to='/users/2015'>Users</NavLink>
            </li>
        </ul>
    </div>
)