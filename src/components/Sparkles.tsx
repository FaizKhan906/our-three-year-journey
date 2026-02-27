import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
}

const Sparkles = ({ count = 20 }: { count?: number }) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 3 + Math.random() * 6,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5,
    }));
    setSparkles(generated);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-primary animate-sparkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            "--duration": `${s.duration}s`,
            "--delay": `${s.delay}s`,
            animationDelay: `${s.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Sparkles;
