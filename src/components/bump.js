import { useEffect, useState } from "react";
import { CDN_URL } from "../constants";
import { getRandomInt } from "../utils";
import "../styles/bump.scss";

const NUMBER_OF_BUMPS = 10;

function Bump() {
  const [bump, setBump] = useState(1);
  const [showStatic, setShowStatic] = useState(0);

  useEffect(() => {
    const bumpVideo = document.getElementById(`bump-${bump - 1}`);

    if (!bumpVideo) {
      return;
    }

    const playNextBump = () => {
      setBump((bump) => {
        const nextBump = bump + 1;

        return nextBump > NUMBER_OF_BUMPS ? 1 : nextBump;
      });
    };

    bumpVideo.onended = playNextBump;
    bumpVideo.volume = 0;
    bumpVideo.muted = true;
    bumpVideo.play();

    const staticVid = getRandomInt(1, 12);
    setShowStatic(staticVid);

    const staticTimeout = setTimeout(() => {
      setShowStatic(0);
    }, 750);

    return () => {
      if (bumpVideo) {
        bumpVideo.onended = undefined;
      }

      if (staticTimeout) {
        clearTimeout(staticTimeout);
      }
    };
  }, [bump]);

  return (
    <div className="bump">
      <video
        key={showStatic}
        id="static"
        className={`bump-static${showStatic !== 0 ? " show" : ""}`}
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={`${CDN_URL}/videos/CRT_${showStatic || 2}-comp.mp4`}
          type="video/mp4"
        />
      </video>
      {[...Array(NUMBER_OF_BUMPS)].map((_, i) => (
        <video
          key={`bump-${i}`}
          id={`bump-${i}`}
          className={`bump-video${bump === i + 1 ? " show" : ""}`}
          muted
          playsInline
        >
          <source
            src={`${CDN_URL}/videos/bump-${i + 1}-comp.mp4`}
            type="video/mp4"
          />
        </video>
      ))}
    </div>
  );
}

export default Bump;
