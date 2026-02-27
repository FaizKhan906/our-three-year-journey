import { motion } from "framer-motion";
import Sparkles from "./Sparkles";
import heartsImg from "@/assets/hearts.png";

const SlideOpening = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center bg-dark-gradient overflow-hidden">
      <Sparkles count={30} />
      
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heartsImg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          className="text-6xl mb-4"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          💕
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl font-display font-bold text-love-gradient mb-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Happy 3rd Anniversary
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl font-script text-primary mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Mera Baby 🥰
        </motion.p>

        <motion.p
          className="text-muted-foreground text-sm mb-8 max-w-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          3 saal ka safar... bohot khaas hai yeh ✨
        </motion.p>

        <motion.button
          onClick={onNext}
          className="bg-love-gradient text-primary-foreground px-8 py-3 rounded-full font-semibold text-lg glow-rose shimmer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          Open Karo Baby 💌
        </motion.button>

        <motion.div
          className="mt-6 flex gap-2 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          {["🌹", "❤️", "💍", "❤️", "🌹"].map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
            >
              {e}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SlideOpening;
