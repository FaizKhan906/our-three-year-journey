import { motion } from "framer-motion";
import Sparkles from "../Sparkles";
import ramadanImg from "@/assets/ramadan.png";

const SlideRamadan = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="relative h-full w-full flex flex-col bg-dark-gradient overflow-hidden">
      <Sparkles count={15} />

      <motion.div
        className="relative w-full h-[45%] overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={ramadanImg} alt="Ramadan" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <motion.div
          className="absolute top-4 left-1/2 -translate-x-1/2 text-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          🌙
        </motion.div>
      </motion.div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-16 relative z-10">
        <motion.p
          className="font-script text-primary text-lg mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Together in Faith 🤲🏻
        </motion.p>

        <motion.h2
          className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          4th Ramadan Together 🌙
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-center text-sm leading-relaxed max-w-sm mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Alhamdulillah baby hamara 4th Ramadan saath me 🤲🏻✨ May Allah give us more strength aur hamare pyar 
          ko aur badhaye aur hamari relationship ko halal kare jaldi se jaldi Ameen 🥺💕 
          Tere saath roza rakhna, iftaar karna... sab special hai jaan 🌙
        </motion.p>

        <motion.div
          className="flex gap-3 text-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {["🌙", "🤲🏻", "✨", "🕌", "💕"].map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
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
          Aur Padho Baby →
        </motion.button>
      </div>
    </div>
  );
};

export default SlideRamadan;
