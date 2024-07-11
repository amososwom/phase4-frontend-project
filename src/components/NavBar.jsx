import { NavLink } from "react-router-dom";
import "../NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">RealEstateApp</div>
        <div className="navbar-links">
          <NavLink exact to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
          <NavLink to="/register" className="nav-link">
            Signup
          </NavLink>
          <NavLink to="/post-property" className="nav-link">
            Post Property
          </NavLink>
          <NavLink to="/market" className="nav-link">
            Market
          </NavLink>
          <NavLink
            to="/favorites"
           
            className="nav-link"
          >
            Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;












