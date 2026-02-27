import { useEffect, useState } from "react";

const HEART_EMOJIS = ["❤️", "💕", "💗", "💖", "💘", "💝", "🥰", "😘", "✨", "🌹"];

interface FloatingHeart {
  id: number;
  emoji: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

const FloatingHearts = ({ count = 15 }: { count?: number }) => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
      left: Math.random() * 100,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 10,
      size: 14 + Math.random() * 24,
    }));
    setHearts(generated);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute animate-float-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            "--duration": `${heart.duration}s`,
            "--delay": `${heart.delay}s`,
            animationDelay: `${heart.delay}s`,
          } as React.CSSProperties}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
