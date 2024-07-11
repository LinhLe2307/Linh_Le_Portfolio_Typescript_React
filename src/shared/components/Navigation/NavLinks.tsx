import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

interface StyledDivProps {
  open: boolean;
}

const NavbarContainer = styled.nav<StyledDivProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
  font-family: "Raleway", sans-serif;

  .menu {
    display: flex;
    list-style: none;

    li {
      margin: 0 1rem;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
      display: ${({ open }) => (open ? 'flex' : 'none')};
      background-color: #333;

      li {
        margin: 1rem 0;
      }
    }
  }

  .menu-toggle {
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const NavLinks = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer open={menuOpen}>
      <div className="logo">Linh Le</div>
      <ul className="menu">
        <li><NavLink className="nav-link active" to="/">Home</NavLink></li>
             {/* <li><NavLink className="nav-link" to="/about">About</NavLink></li> */}         
        <li><NavLink className="nav-link" to="/resume">Resume</NavLink></li>
        <li><NavLink className="nav-link" to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
      </ul>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>
    </NavbarContainer>
  )
}

export default NavLinks