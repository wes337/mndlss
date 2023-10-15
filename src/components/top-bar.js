import { useLocation, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { showTransitionAtom } from "../state";
import "../styles/top-bar.scss";

function TopBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [, setShowTransition] = useAtom(showTransitionAtom);

  const onClick = () => {
    if (location.pathname === "/") {
      return;
    }

    setShowTransition(true);
    setTimeout(() => navigate("/"), 250);
  };

  return (
    <div className="top-bar">
      <div className="top-bar-logo">
        <button onClick={onClick}>
          <img src={`/images/logo/logo-alt.png`} alt="MNDLSS" />
        </button>
      </div>
    </div>
  );
}

export default TopBar;
