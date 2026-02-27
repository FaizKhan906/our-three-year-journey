import { motion } from "framer-motion";

interface ProgressDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

const ProgressDots = ({ total, current, onDotClick }: ProgressDotsProps) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-2 items-center">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className="relative p-1"
          aria-label={`Go to slide ${i + 1}`}
        >
          <motion.div
            className={`rounded-full transition-colors duration-300 ${
              i === current ? "bg-primary" : "bg-muted-foreground/30"
            }`}
            animate={{
              width: i === current ? 24 : 8,
              height: 8,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          {i === current && (
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/30"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ margin: "auto", width: 24, height: 8 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default ProgressDots;
