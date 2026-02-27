import { motion } from "framer-motion";
import Sparkles from "../Sparkles";
import lakeImg from "@/assets/lake.png";

const SlideUpvanLake = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="relative h-full w-full flex flex-col bg-dark-gradient overflow-hidden">
      <Sparkles count={15} />

      <motion.div
        className="relative w-full h-[45%] overflow-hidden"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={lakeImg} alt="Upvan Lake" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-4xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          💋
        </motion.div>
      </motion.div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-16 relative z-10">
        <motion.p
          className="font-script text-primary text-lg mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Our Special Place 🌊
        </motion.p>

        <motion.h2
          className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Upvan Lake 💏
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-center text-sm leading-relaxed max-w-sm mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Yahan pe me tujhe propose kiya tha sweetu 🥺💍 Yahan pe hamara pehla deep french kiss hua tha... 
          wo touchy moments... sab kuch yaad hai mujhe baby 💕 Wo sunset ke samne hum dono... 
          duniya ki sabse khoobsurat feeling thi wo 😘
        </motion.p>

        <motion.div
          className="flex gap-3 text-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {["🌅", "💋", "💍", "🦢", "💓"].map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.15 }}
            >
              {e}
            </motion.span>
          ))}
        </motion.div>

        <motion.button
          onClick={onNext}
          className="bg-love-gradient text-primary-foreground px-6 py-2.5 rounded-full font-semibold glow-rose"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          whileTap={{ scale: 0.95 }}
        >
          Aur Sunao Baby →
        </motion.button>
      </div>
    </div>
  );
};

export default SlideUpvanLake;
