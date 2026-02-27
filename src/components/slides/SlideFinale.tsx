import { motion } from "framer-motion";
import Sparkles from "../Sparkles";
import anniversaryImg from "@/assets/anniversary.png";

const SlideFinale = () => {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center bg-dark-gradient overflow-hidden">
      <Sparkles count={40} />

      {/* Background */}
      <div className="absolute inset-0">
        <img src={anniversaryImg} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated hearts burst */}
        <motion.div
          className="text-5xl mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, 360] }}
          transition={{ duration: 1, type: "spring" }}
        >
          💝
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl font-display font-bold text-love-gradient mb-2 text-shadow-romantic"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Happy 3rd Anniversary
        </motion.h2>

        <motion.p
          className="text-2xl font-script text-primary mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Mera Baby, Meri Jaan 🥰
        </motion.p>

        <motion.div
          className="memory-card mb-6 max-w-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-foreground text-sm leading-relaxed">
            Me tumse kudhse jyada pyar karta hu, sabse jyada pyar karta hu is duniya me 💕 
            Tum hi zindagi ho, tum hi sans lene ki wajah ho, tum hi takat ho aur tum ho kamzori bhi 🥺 
            Sabkuch tum ho baby... 
          </p>
          <p className="text-foreground text-sm leading-relaxed mt-3">
            Yeh 3 years bohot khas hai ❤️ Hamare zindagi ka sabse important aur special 3 years... 
            jisme hum bohot pyar kiye, bohot jhagda bhi kiye, bohot grow kiye saath me ✨
          </p>
          <p className="text-foreground text-sm leading-relaxed mt-3">
            May Allah increase our love aur hamari relationship ko halal kare jaldi Ameen 🤲🏻💍
          </p>
        </motion.div>

        <motion.p
          className="font-script text-primary text-xl mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          I Love You Always & Forever ❤️
        </motion.p>

        <motion.div
          className="flex gap-2 text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          {["🌹", "💕", "💍", "🥰", "💗", "😘", "💝", "🌹"].map((e, i) => (
            <motion.span
              key={i}
              animate={{ 
                y: [0, -12, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.15 }}
            >
              {e}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="mt-6 text-muted-foreground text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          — Tumhara hi hamesha, Forever & Always 💕 —
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SlideFinale;
