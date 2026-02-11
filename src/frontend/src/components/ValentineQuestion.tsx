import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles } from 'lucide-react';

interface ValentineQuestionProps {
  onAccept: () => void;
}

export default function ValentineQuestion({ onAccept }: ValentineQuestionProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isNoButtonMoving, setIsNoButtonMoving] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize position to center-right
    if (noButtonRef.current && containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const button = noButtonRef.current.getBoundingClientRect();
      setNoButtonPosition({
        x: container.width / 2 + 60,
        y: container.height / 2 - button.height / 2,
      });
    }
  }, []);

  const moveNoButton = () => {
    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();

    // Calculate safe boundaries
    const maxX = container.width - button.width - 20;
    const maxY = container.height - button.height - 20;

    // Generate random position
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoButtonPosition({ x: newX, y: newY });
    setIsNoButtonMoving(true);

    setTimeout(() => setIsNoButtonMoving(false), 300);
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-[500px] flex items-center justify-center"
    >
      <div className="text-center space-y-8 animate-fade-in">
        {/* Decorative hearts */}
        <div className="absolute top-0 left-1/4 animate-float">
          <Heart className="w-8 h-8 text-valentine-primary/30 fill-valentine-primary/30" />
        </div>
        <div className="absolute top-10 right-1/4 animate-float-delayed">
          <Sparkles className="w-6 h-6 text-valentine-accent/40" />
        </div>
        <div className="absolute bottom-10 left-1/3 animate-float-slow">
          <Heart className="w-6 h-6 text-valentine-secondary/30 fill-valentine-secondary/30" />
        </div>

        {/* Main question */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <Heart className="w-20 h-20 text-valentine-primary fill-valentine-primary animate-heartbeat" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-valentine-primary tracking-tight">
            Will you be my
          </h1>
          <h2 className="text-6xl md:text-7xl font-bold text-valentine-accent animate-pulse">
            Valentine?
          </h2>
        </div>

        {/* Buttons container */}
        <div className="relative h-32 mt-12">
          {/* Yes button - always centered */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -ml-32">
            <Button
              onClick={onAccept}
              size="lg"
              className="bg-valentine-primary hover:bg-valentine-primary/90 text-white px-12 py-6 text-2xl font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Heart className="w-6 h-6 mr-2 fill-white" />
              Yes
            </Button>
          </div>

          {/* No button - moves on hover */}
          <button
            ref={noButtonRef}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            style={{
              position: 'absolute',
              left: `${noButtonPosition.x}px`,
              top: `${noButtonPosition.y}px`,
              transition: isNoButtonMoving ? 'all 0.3s ease-out' : 'none',
            }}
            className="bg-valentine-muted/20 hover:bg-valentine-muted/30 text-valentine-muted px-12 py-6 text-2xl font-bold rounded-full border-2 border-valentine-muted/30 cursor-pointer"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
