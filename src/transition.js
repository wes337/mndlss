import { motion } from "framer-motion";
import { CDN_URL } from "./constants";
import "./styles/transition.scss";

const transition = (Component) => {
  return () => (
    <>
      <Component />
      <motion.div className="text">
        <video autoPlay muted playsInline fetchPriority="high">
          <source src={`${CDN_URL}/videos/text-muted-comp.mp4`} />
        </video>
      </motion.div>
    </>
  );
};

export default transition;
