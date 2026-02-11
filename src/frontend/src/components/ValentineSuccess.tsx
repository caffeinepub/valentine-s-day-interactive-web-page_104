import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function ValentineSuccess() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="text-center space-y-8 py-12">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-valentine-primary fill-valentine-primary animate-float-up opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              width: `${20 + Math.random() * 20}px`,
              height: `${20 + Math.random() * 20}px`,
            }}
          />
        ))}
      </div>

      {/* Success message */}
      <div
        className={`space-y-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex justify-center gap-2">
          <Sparkles className="w-12 h-12 text-valentine-accent animate-spin-slow" />
          <Heart className="w-16 h-16 text-valentine-primary fill-valentine-primary animate-heartbeat" />
          <Sparkles className="w-12 h-12 text-valentine-accent animate-spin-slow" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-valentine-primary">
          Good choice ❤️
        </h1>

        {/* Meme image */}
        <div
          className={`mt-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="inline-block rounded-2xl overflow-hidden shadow-2xl border-4 border-valentine-primary/20">
            <img
              src="/assets/generated/valentine-success-meme.dim_400x400.png"
              alt="Success meme"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Additional decorative text */}
        <p className="text-2xl text-valentine-secondary font-medium mt-6 animate-fade-in">
          You made the right decision! 💕
        </p>
      </div>
    </div>
  );
}
