import NavLink from "./nav-link";
import "../styles/nav.scss";

function Nav() {
  return (
    <div className="nav">
      <NavLink label="Work" to="/work" img="face" />
      <NavLink label="Contact" to="/contact" img="skull" />
      <NavLink label="More" to="/more" img="brain" />
    </div>
  );
}

export default Nav;
