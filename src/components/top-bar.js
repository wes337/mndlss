import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import {
  lightModeAtom,
  showTransitionAtom,
  productPreviewAtom,
} from "../state";
import "../styles/top-bar.scss";

function TopBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [, setShowTransition] = useAtom(showTransitionAtom);
  const [, setProductPreview] = useAtom(productPreviewAtom);
  const [lightMode] = useAtom(lightModeAtom);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const animateInterval = setInterval(() => {
      setAnimate((animate) => !animate);
    }, 500);

    return () => {
      clearInterval(animateInterval);
    };
  }, []);

  const onClick = () => {
    if (location.pathname === "/") {
      return;
    }

    setShowTransition(true);

    setTimeout(() => {
      navigate("/");
      setProductPreview(null);
    }, 250);
  };

  return (
    <div className={`top-bar${lightMode ? " light" : ""}`}>
      <div className="top-bar-logo">
        <button onClick={onClick}>
          <img
            className={animate ? "show" : "hide"}
            src={`/images/logo/skull-logo-1.png`}
            alt="MNDLSS"
          />
          <img
            className={animate ? "hide" : "show"}
            src={`/images/logo/skull-logo-2.png`}
            alt="MNDLSS"
          />
        </button>
      </div>
    </div>
  );
}

export default TopBar;
