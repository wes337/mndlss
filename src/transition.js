import { motion } from "framer-motion";
import "./styles/transition.scss";

const transition = (Component) => {
  return () => (
    <>
      <Component />
      <motion.div className="text">
        <video autoPlay muted playsInline fetchPriority="high">
          <source src="/videos/text.mp4" />
        </video>
      </motion.div>
    </>
  );
};

export default transition;
