import React from "react";

const NavBar = props => {

  return (
    <nav className='navbar has-shadow is-dark'>
    <div className='navbar-brand'>
      <a href='/' className='navbar-item'>Logo Placeholder</a>
    </div>
    <div className="navbar-menu" id="nav-links">
      <div className="navbar-end">
        {/* <a className="navbar-item">My Account</a> */}
        <a className="navbar-item">Log In</a>
      </div>
    </div>
  </nav>
  );
};

export default NavBar;