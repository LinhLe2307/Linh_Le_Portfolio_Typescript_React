import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {

  return (
    <nav id="navbar" className="navbar">
        <ul>
            <li><NavLink className="nav-link active" to="/">Home</NavLink></li>
            {/* <li><NavLink className="nav-link" to="/about">About</NavLink></li> */}
            <li><NavLink className="nav-link" to="/resume">Resume</NavLink></li>
            <li><NavLink className="nav-link" to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  )
}

export default NavLinks