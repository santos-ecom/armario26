import { useEffect, useState } from 'react';

export const useImagePreloader = (imageSrcs: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagePromises = imageSrcs.map((src) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
        img.src = src;
      });
    });

    Promise.allSettled(imagePromises).then((results) => {
      const loaded = new Set<string>();
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          loaded.add(imageSrcs[index]);
        }
      });
      setLoadedImages(loaded);
      setIsLoading(false);
    });
  }, [imageSrcs]);

  return { loadedImages, isLoading };
};