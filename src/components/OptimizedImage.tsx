import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({
  src,
  alt,
  className = '',
  priority = false,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  placeholder,
  onLoad,
  onError
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px'
  });

  // For priority images, load immediately (eager)
  // For non-priority images, load when they come into view
  const shouldLoad = priority || hasIntersected;

  // Reset state when image source changes
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  // Apply native fetchpriority without React warning (React 18)
  useEffect(() => {
    if (imgRef.current && fetchPriority && fetchPriority !== 'auto') {
      imgRef.current.setAttribute('fetchpriority', fetchPriority);
    }
  }, [fetchPriority]);

  return (
    <div ref={ref} className={`${className} relative`}>
      <img
        ref={imgRef}
        src={shouldLoad ? src : placeholder}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading={priority ? 'eager' : loading}
        decoding={decoding}
        onLoad={() => {
          setIsLoaded(true);
          onLoad?.();
        }}
        onError={() => {
          setHasError(true);
          onError?.();
        }}
        style={{ backgroundColor: hasError ? '#f3f4f6' : 'transparent' }}
        aria-busy={!isLoaded}
      />
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-secondary animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage;