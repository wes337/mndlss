import NavLink from "./nav-link";
import "../styles/nav.scss";

function Nav() {
  return (
    <div className="nav">
      <NavLink label="Work" to="/work" img="face" />
      <NavLink label="Contact" to="/contact" img="skull" />
      <NavLink label="Shop" to="/shop" img="brain" />
    </div>
  );
}

export default Nav;
