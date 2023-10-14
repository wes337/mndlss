import { Link } from "react-router-dom";
import "../styles/top-bar.scss";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-logo">
        <Link to="/">
          <img src={`/images/logo/logo-alt.png`} alt="MNDLSS" />
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
