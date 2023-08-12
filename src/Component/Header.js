import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navcontainer">
      <NavLink className="nav_item" activeClassName="active" to="/">
        DashBoard
      </NavLink>
      <NavLink className="nav_item" activeClassName="active" to="/department">
        DepartMent
      </NavLink>
      <NavLink className="nav_item" activeClassName="active" to="/products">
        Product
      </NavLink>
    </nav>
  );
}
