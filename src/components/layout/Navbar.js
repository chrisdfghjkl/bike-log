import { NavLink } from "react-router-dom";

import styles from './Navbar.module.css';


const Navbar = () => {
  return (
    <header className={styles.header}>
      <NavLink to='/home' className={styles.logo}>Bike Log</NavLink>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to='/bikes' activeClassName={styles.active}> 
              My Bikes
            </NavLink>
          </li>
          <li>
            <NavLink to='/login' activeClassName={styles.active}>
              Log In
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;