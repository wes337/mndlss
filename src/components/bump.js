import { useEffect, useState } from "react";
import { CDN_URL } from "../constants";
import { getRandomInt } from "../utils";
import "../styles/bump.scss";

const BUMPS = [
  `${CDN_URL}/videos/bump-1-comp-muted.mp4`,
  `${CDN_URL}/videos/static-5-comp-muted.mp4`,
  `${CDN_URL}/videos/bump-2-comp-muted.mp4`,
  `${CDN_URL}/videos/static-6-comp-muted.mp4`,
  `${CDN_URL}/videos/bump-3-comp-muted.mp4`,
  `${CDN_URL}/videos/static-7-comp-muted.mp4`,
  `${CDN_URL}/videos/bump-4-comp-muted.mp4`,
  `${CDN_URL}/videos/static-8-comp-muted.mp4`,
  `${CDN_URL}/videos/bump-5-comp-muted.mp4`,
  `${CDN_URL}/videos/static-9-comp-muted.mp4`,
  `${CDN_URL}/videos/bump-6-comp-muted.mp4`,
  `${CDN_URL}/videos/static-10-comp-muted.mp4`,
  `${CDN_URL}/videos/bump-7-comp-muted.mp4`,
  `${CDN_URL}/videos/static-11-comp-muted.mp4`,
  `${CDN_URL}/videos/bump-8-comp-muted.mp4`,
  `${CDN_URL}/videos/static-12-comp-muted.mp4`,
  `${CDN_URL}/videos/bump-9-comp-muted.mp4`,
  `${CDN_URL}/videos/static-3-comp-muted.mp4`,
  `${CDN_URL}/videos/bump-10-comp-muted.mp4`,
  `${CDN_URL}/videos/static-4-comp-muted.mp4`,
];

function Bump() {
  const [currentBump, setCurrentBump] = useState(1);
  const [staticVideo, setStaticVideo] = useState("");

  const getRandomStaticVideo = () => {
    const randomStaticNumber = getRandomInt(1, 12);
    return `${CDN_URL}/videos/static-${randomStaticNumber}-comp-muted.mp4`;
  };

  useEffect(() => {
    const bumpVideo = document.getElementById(`bump-${currentBump - 1}`);

    if (!bumpVideo) {
      return;
    }

    const playNextBump = () => {
      setCurrentBump((currentBump) => {
        const nextBump = currentBump + 1;
        return nextBump > BUMPS.length ? 1 : nextBump;
      });
    };

    bumpVideo.onended = playNextBump;
    bumpVideo.volume = 0;
    bumpVideo.muted = true;
    bumpVideo.play();

    setStaticVideo(getRandomStaticVideo());

    const staticVideoTimeout = setTimeout(() => {
      setStaticVideo("");
    }, 200);

    return () => {
      if (bumpVideo) {
        bumpVideo.onended = undefined;
      }

      clearTimeout(staticVideoTimeout);
    };
  }, [currentBump]);

  return (
    <div className="bump">
      {BUMPS.map((bump, i) => (
        <video
          key={`bump-${i}`}
          id={`bump-${i}`}
          className={`bump-video${currentBump === i + 1 ? " show" : ""}`}
          muted
          playsInline
        >
          <source src={bump} type="video/mp4" />
        </video>
      ))}
      <video
        className={`static-video${staticVideo ? " show " : ""}`}
        src={staticVideo || getRandomStaticVideo()}
        muted
        playsInline
        autoPlay
      />
    </div>
  );
}

export default Bump;
