import { motion } from "framer-motion";
import Sparkles from "../Sparkles";
import foodImg from "@/assets/food.png";

const SlideFood = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="relative h-full w-full flex flex-col bg-dark-gradient overflow-hidden">
      <Sparkles count={12} />

      <motion.div
        className="relative w-full h-[45%] overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={foodImg} alt="Food memories" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <motion.div
          className="absolute top-4 right-4 text-3xl"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          🍕
        </motion.div>
      </motion.div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-16 relative z-10">
        <motion.p
          className="font-script text-primary text-lg mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Hamare Food Dates 😋
        </motion.p>

        <motion.h2
          className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Thane Station Wale Din 🍔
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-center text-sm leading-relaxed max-w-sm mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Baby yaad hai kitne momos khaye hum dono ne 😂🥟 Pizza, burger, fries... Thane station ke sab shops me 
          jaake khaya hai humne 😋 Wo chhoti chhoti dates, wo khushi, wo tere saath kuch bhi khaana 
          duniya ka best food lagta tha mujhe 💕
        </motion.p>

        <motion.div
          className="flex gap-3 text-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {["🥟", "🍕", "🍔", "🍟", "❤️"].map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, delay: i * 0.15 }}
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
          Aage Dekho Jaan →
        </motion.button>
      </div>
    </div>
  );
};

export default SlideFood;
