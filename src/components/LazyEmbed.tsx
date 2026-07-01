import { useEffect, useRef, useState } from 'react';

interface LazyEmbedProps {
  children: React.ReactNode;
  threshold?: number;
}

export default function LazyEmbed({ children, threshold = 0.1 }: LazyEmbedProps) {
  const [isVisible, setIsVisible] = useState(false);
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (embedRef.current) {
      observer.observe(embedRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={embedRef} style={{ minHeight: isVisible ? 'auto' : '400px' }}>
      {isVisible ? children : (
        <div className="embed-loading">
          <div className="loading-spinner"></div>
          <p>Loading content...</p>
        </div>
      )}
    </div>
  );
}
