












import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">RealEstateApp</div>
        <div className="navbar-links">
          <NavLink exact to="/" activeClassName="active" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/login" activeClassName="active" className="nav-link">
            Login
          </NavLink>
          <NavLink to="/register" activeClassName="active" className="nav-link">
            Signup
          </NavLink>
          <NavLink to="/market" activeClassName="active" className="nav-link">
            Market
          </NavLink>
          <NavLink
            to="/favorites"
            activeClassName="active"
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