import { useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { showTransitionAtom } from "../state";
import { CDN_URL } from "../constants";
import "../styles/transition.scss";

function Transition() {
  const videoRef = useRef();
  const [showTransition, setShowTransition] = useAtom(showTransitionAtom);

  useEffect(() => {
    if (!showTransition) {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.currentTime = 0;
    video.play();

    const transitionTimeout = setTimeout(() => {
      setShowTransition(false);
    }, 750);

    return () => clearTimeout(transitionTimeout);
  }, [showTransition, setShowTransition]);

  return (
    <div className={`transition${showTransition ? " show" : ""}`}>
      <video ref={videoRef} muted playsInline fetchPriority="high">
        <source src={`${CDN_URL}/videos/text-muted-comp.mp4`} />
      </video>
    </div>
  );
}

export default Transition;
