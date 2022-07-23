import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className={}>
      <div className={}>Bike Log</div>
      <nav className={}>
        <ul>
          <li>My Bikes</li>
          <li>Add Bike</li>
          <li>Log In</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;