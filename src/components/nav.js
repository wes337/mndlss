import NavLink from "./nav-link";
import "../styles/nav.scss";

function Nav() {
  return (
    <div className="nav">
      <NavLink label="Work" to="/work" mainImg="brain-1" altImg="brain-2" />
      <NavLink
        label="Contact"
        to="/contact"
        mainImg="skull-1"
        altImg="skull-2"
      />
      <NavLink label="More" to="/more" mainImg="face-1" altImg="face-2" />
    </div>
  );
}

export default Nav;
