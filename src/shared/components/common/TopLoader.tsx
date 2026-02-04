import { useEffect, useState } from "react";

interface TopLoaderProps {
  color?: string;
  height?: number;
}

/**
 * Top loading bar component displayed during route transitions
 * Provides visual feedback while lazy-loaded components are being fetched
 */
export const TopLoader = ({
  color = "hsl(var(--primary))",
  height = 3,
}: TopLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          return prev;
        }
        const increment = Math.random() * 10 + 5;
        return Math.min(prev + increment, 90);
      });
    }, 200);

    return () => {
      clearInterval(timer);
      setProgress(100);
      setTimeout(() => setVisible(false), 200);
    };
  }, []);

  if (!visible && progress === 100) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999]"
      style={{ height: `${height}px` }}
    >
      <div
        className="h-full transition-all duration-200 ease-out"
        style={{
          width: `${progress}%`,
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}, 0 0 5px ${color}`,
        }}
      />
    </div>
  );
};

/**
 * Full page loading spinner for route transitions
 */
export const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        <p className="text-muted-foreground text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default TopLoader;
