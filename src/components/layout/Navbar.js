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
          <li className={styles.login}>
            Log In
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;