import React from "react";
import { NavLink } from 'react-router-dom';
  
const Navbar = () => {
  return (
    <header>
      <>
          <NavLink to="/" activeStyle>
            <button>Home</button>
          </NavLink>
          <NavLink to="/projects" activeStyle>
            <button>Projects</button>
          </NavLink>
          <NavLink to="/contact" activeStyle>
            <button>Contact me</button>
          </NavLink>
      </>
    </header>
  );
};
  
export default Navbar;