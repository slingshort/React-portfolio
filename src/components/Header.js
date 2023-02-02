import React from "react";
import { NavLink } from 'react-router-dom';
  
const Navbar = () => {
  return (
    <>
        <NavLink to="/" activeStyle>
            Home
        </NavLink>
        <NavLink to="/about" activeStyle>
            About me
        </NavLink>
        <NavLink to="/contact" activeStyle>
            Contact me
        </NavLink>

    </>
  );
};
  
export default Navbar;