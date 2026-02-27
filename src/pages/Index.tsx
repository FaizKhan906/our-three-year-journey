import { useState, useCallback } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import ProgressDots from "@/components/ProgressDots";
import SlideTransition from "@/components/SlideTransition";
import SlideOpening from "@/components/slides/SlideOpening";
import SlideCollege from "@/components/slides/SlideCollege";
import SlideUpvanLake from "@/components/slides/SlideUpvanLake";
import SlideGarden from "@/components/slides/SlideGarden";
import SlideFood from "@/components/slides/SlideFood";
import SlideRamadan from "@/components/slides/SlideRamadan";
import SlideMissing from "@/components/slides/SlideMissing";
import SlideFinale from "@/components/slides/SlideFinale";

const TOTAL_SLIDES = 8;

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  const next = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <SlideOpening onNext={next} />;
      case 1: return <SlideCollege onNext={next} />;
      case 2: return <SlideUpvanLake onNext={next} />;
      case 3: return <SlideGarden onNext={next} />;
      case 4: return <SlideFood onNext={next} />;
      case 5: return <SlideRamadan onNext={next} />;
      case 6: return <SlideMissing onNext={next} />;
      case 7: return <SlideFinale />;
      default: return <SlideOpening onNext={next} />;
    }
  };

  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      <FloatingHearts count={currentSlide === 7 ? 25 : 12} />
      
      <div className="relative w-full h-full">
        <SlideTransition slideKey={currentSlide} direction={direction}>
          {renderSlide()}
        </SlideTransition>
      </div>

      {currentSlide > 0 && (
        <ProgressDots
          total={TOTAL_SLIDES}
          current={currentSlide}
          onDotClick={goToSlide}
        />
      )}
    </div>
  );
};

export default Index;
