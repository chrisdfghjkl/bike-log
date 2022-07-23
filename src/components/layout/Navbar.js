import { NavLink } from "react-router-dom";

import styles from './Navbar.module.css';


const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Bike Log</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to='/bikes' activeClassName={styles.active}> 
              My Bikes
            </NavLink>
          </li>
          <li>
            <NavLink to='add-bike' activeClassName={styles.active}>
              Add Bike
            </NavLink>
          </li>
          <li>Log In</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;