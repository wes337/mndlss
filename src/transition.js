import { motion } from "framer-motion";
import { CDN_URL } from "./constants";
import "./styles/transition.scss";

const transition = (Component) => {
  return () => (
    <>
      <Component />
      <motion.div
        className="text"
        initial={{
          opacity: 0,
          filter: "invert(0)",
        }}
        animate={{
          opacity: [0, 1, 1, 1, 0],
          filter: ["invert(1)", "invert(0)", "invert(1)", "invert(0)"],
          transition: {
            duration: 1,
            times: [0, 0.01, 0.6, 0.8, 1],
          },
        }}
        exit={{ opacity: 0 }}
      >
        <video autoPlay muted playsInline fetchPriority="high">
          <source src={`${CDN_URL}/videos/text-muted-comp.mp4`} />
        </video>
      </motion.div>
    </>
  );
};

export default transition;
