import { useEffect, useState } from "react";
import { CDN_URL } from "../constants";
import "../styles/bump.scss";

const BUMPS = [
  `${CDN_URL}/videos/bump-1-comp.mp4`,
  `${CDN_URL}/videos/static-4-comp.mp4`,
  `${CDN_URL}/videos/bump-2-comp.mp4`,
  `${CDN_URL}/videos/static-6-comp.mp4`,
  `${CDN_URL}/videos/bump-3-comp-2.mp4`,
  `${CDN_URL}/videos/static-7-comp.mp4`,
  `${CDN_URL}/videos/bump-4-comp.mp4`,
  `${CDN_URL}/videos/static-8-comp.mp4`,
  `${CDN_URL}/videos/bump-5-comp.mp4`,
  `${CDN_URL}/videos/static-9-comp.mp4`,
  `${CDN_URL}/videos/bump-6-comp.mp4`,
  `${CDN_URL}/videos/static-10-comp.mp4`,
  `${CDN_URL}/videos/bump-7-comp.mp4`,
  `${CDN_URL}/videos/static-11-comp.mp4`,
  `${CDN_URL}/videos/bump-8-comp.mp4`,
  `${CDN_URL}/videos/static-12-comp.mp4`,
  `${CDN_URL}/videos/bump-9-comp.mp4`,
  `${CDN_URL}/videos/static-3-comp.mp4`,
  `${CDN_URL}/videos/bump-10-comp.mp4`,
  `${CDN_URL}/videos/static-5-comp.mp4`,
];

function Bump() {
  const [currentBump, setCurrentBump] = useState(1);

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

    return () => {
      if (bumpVideo) {
        bumpVideo.onended = undefined;
      }
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
    </div>
  );
}

export default Bump;
