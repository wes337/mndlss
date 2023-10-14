import { Link } from "react-router-dom";
import { CDN_URL } from "../constants";
import "../styles/nav.scss";

function Nav() {
  return (
    <div className="nav">
      <Link className="nav-link" to="/work">
        <div className="nav-link-icon">
          <img className="main" src="/images/nav/brain-small-1.png" alt="" />
          <img className="alt" src="/images/nav/brain-small-2.png" alt="" />
        </div>
        <span>Work</span>
      </Link>
      <Link className="nav-link" to="/contact">
        <div className="nav-link-icon">
          <img className="main" src="/images/nav/skull-1.png" alt="" />
          <img className="alt" src="/images/nav/skull-2.png" alt="" />
        </div>
        <span>Contact</span>
      </Link>
      <Link className="nav-link" to="/more">
        <div className="nav-link-icon">
          <img className="main" src="/images/nav/face-1.png" alt="" />
          <img className="alt" src="/images/nav/face-2.png" alt="" />
        </div>
        <span>More</span>
      </Link>
    </div>
  );
}

export default Nav;
