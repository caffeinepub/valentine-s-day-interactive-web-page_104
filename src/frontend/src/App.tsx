import { useState } from 'react';
import { Heart } from 'lucide-react';
import ValentineQuestion from './components/ValentineQuestion';
import ValentineSuccess from './components/ValentineSuccess';

export default function App() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-valentine-light via-valentine-lighter to-white dark:from-valentine-dark dark:via-valentine-darker dark:to-background">
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {!accepted ? (
            <ValentineQuestion onAccept={() => setAccepted(true)} />
          ) : (
            <ValentineSuccess />
          )}
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-valentine-muted">
        <p className="flex items-center justify-center gap-1">
          © 2025. Built with <Heart className="w-4 h-4 text-valentine-primary fill-valentine-primary animate-pulse" /> using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-valentine-primary hover:underline font-medium"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
