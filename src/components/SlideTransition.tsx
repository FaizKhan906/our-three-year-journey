import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface SlideTransitionProps {
  slideKey: number;
  direction: number;
  children: ReactNode;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.9,
  }),
};

const SlideTransition = ({ slideKey, direction, children }: SlideTransitionProps) => {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={slideKey}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 200, damping: 30 },
          opacity: { duration: 0.4 },
          scale: { duration: 0.4 },
        }}
        className="absolute inset-0"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SlideTransition;
