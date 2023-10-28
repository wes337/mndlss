import { useEffect } from "react";
import { useAtom } from "jotai";
import { showTransitionSwipeAtom } from "../state";
import { CDN_URL } from "../constants";
import "../styles/transition-swipe.scss";

function TransitionSwipe() {
  const [showTransitionSwipe, setShowTransitionSwipe] = useAtom(
    showTransitionSwipeAtom
  );

  useEffect(() => {
    if (!showTransitionSwipe) {
      return;
    }

    const transitionTimeout = setTimeout(() => {
      setShowTransitionSwipe(false);
    }, 2000);

    return () => clearTimeout(transitionTimeout);
  }, [showTransitionSwipe, setShowTransitionSwipe]);

  return (
    <img
      className={`transition-swipe${showTransitionSwipe ? " show" : ""}`}
      src={`${CDN_URL}/images/misc/mob-comp.png`}
      alt=""
    />
  );
}

export default TransitionSwipe;
