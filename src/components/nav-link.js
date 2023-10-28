import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { CDN_URL } from "../constants";
import {
  showTransitionAtom,
  showTransitionSwipeAtom,
  lightModeAtom,
} from "../state";
import useSpray from "../hooks/spray";
import "../styles/nav-link.scss";

function NavLink({ to, img, label }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [, setShowTransition] = useAtom(showTransitionAtom);
  const [, setShowTransitionSwipe] = useAtom(showTransitionSwipeAtom);
  const [lightMode] = useAtom(lightModeAtom);
  const { spray, startSprayInterval, stopSprayInterval } = useSpray();

  const isActive = location.pathname === to;

  useEffect(() => {
    if (isActive) {
      startSprayInterval();
    }
  }, [isActive, startSprayInterval]);

  const onClick = () => {
    if (isActive) {
      return;
    }

    if (to === "/shop") {
      setShowTransitionSwipe(true);
    } else {
      setShowTransition(true);
    }
    setTimeout(() => navigate(to), to === "/shop" ? 500 : 250);
  };

  const onPointerEnter = () => {
    if (isActive) {
      return;
    }

    startSprayInterval();
  };

  const onPointerLeave = () => {
    if (isActive) {
      return;
    }

    stopSprayInterval();
  };

  return (
    <button
      className={`nav-link${isActive ? " active" : ""}${
        lightMode ? " light" : ""
      }`}
      onClick={onClick}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <img
        className="spray"
        key={spray}
        src={`${CDN_URL}/images/misc/spray-${spray}.png`}
        alt=""
      />
      <div className="nav-link-icon">
        <img
          className="main"
          src={`${CDN_URL}/images/nav/${img}-1.png`}
          alt=""
        />
        <img
          className="alt"
          src={`${CDN_URL}/images/nav/${img}-2.png`}
          alt=""
        />
      </div>
      <span>{label}</span>
    </button>
  );
}

export default NavLink;
