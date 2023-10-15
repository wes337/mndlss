import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { showTransitionAtom } from "../state";
import { CDN_URL } from "../constants";
import "../styles/nav-link.scss";

function NavLink({ to, mainImg, altImg, label }) {
  const location = useLocation();
  const navigate = useNavigate();
  const sprayInterval = useRef();
  const [spray, setSpray] = useState(1);
  const [, setShowTransition] = useAtom(showTransitionAtom);

  const isActive = location.pathname === to;

  const startSprayInterval = () => {
    sprayInterval.current = setInterval(() => {
      setSpray((spray) => {
        const nextSpray = spray + 1;
        return nextSpray > 6 ? 1 : nextSpray;
      });
    }, 200);
  };

  const stopSprayInterval = () => {
    clearInterval(sprayInterval.current);
    sprayInterval.current = undefined;
  };

  useEffect(() => {
    return () => {
      clearInterval(sprayInterval.current);
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      startSprayInterval();
    }
  }, [isActive]);

  const onClick = () => {
    if (isActive) {
      return;
    }

    setShowTransition(true);
    setTimeout(() => navigate(to), 250);
  };

  return (
    <button
      className={`nav-link${isActive ? " active" : ""}`}
      onClick={onClick}
      onPointerEnter={startSprayInterval}
      onPointerLeave={stopSprayInterval}
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
          src={`${CDN_URL}/images/nav/${mainImg}.png`}
          alt=""
        />
        <img
          className="alt"
          src={`${CDN_URL}/images/nav/${altImg}.png`}
          alt=""
        />
      </div>
      <span>{label}</span>
    </button>
  );
}

export default NavLink;
