import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { CDN_URL } from "../constants";
import "../styles/nav-link.scss";

function NavLink({ to, mainImg, altImg, label }) {
  const sprayInterval = useRef();
  const [spray, setSpray] = useState(1);

  useEffect(() => {
    return () => {
      clearInterval(sprayInterval.current);
    };
  }, []);

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

  return (
    <Link
      className="nav-link"
      to={to}
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
    </Link>
  );
}

export default NavLink;
