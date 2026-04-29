import { useState, useEffect } from 'react';

interface ImageData {
  src: string;
  alt: string;
  priority?: boolean;
}

export const useImagePreloadGroup = (images: ImageData[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((image) => {
        return new Promise<string>((resolve, reject) => {
          const img = new Image();
          
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, image.src]));
            resolve(image.src);
          };
          
          img.onerror = () => {
            console.warn(`Failed to preload image: ${image.src}`);
            resolve(image.src); // Resolve anyway to not block other images
          };
          
          img.src = image.src;
        });
      });

      try {
        await Promise.all(imagePromises);
        setAllImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setAllImagesLoaded(true); // Set to true anyway to not block rendering
      }
    };

    preloadImages();
  }, [images]);

  return { loadedImages, allImagesLoaded };
};