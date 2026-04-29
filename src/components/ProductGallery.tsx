import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import OptimizedImage from "@/components/OptimizedImage";

interface ProductGalleryProps {
  externalSelectedImage?: number;
}
import produtoPrincipal from "@/assets/produto-principal-real.jpg";
import produtoAberto1 from "@/assets/produto-aberto1.jpg";
import produtoAberto2 from "@/assets/produto-aberto2.jpg";
import produtoAberto3 from "@/assets/produto-aberto3.jpg";
import produtoFechado from "@/assets/produto-fechado.jpg";
import produtoDimensoes from "@/assets/produto-dimensoes.jpg";
import produtoLateral from "@/assets/produto-lateral.jpg";
import produtoFuncional from "@/assets/produto-funcional.jpg";

const ProductGallery = ({ externalSelectedImage }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(externalSelectedImage || 0);
  const [api, setApi] = useState<CarouselApi>();

  const images = [
    produtoPrincipal,        // 1ª - fica
    produtoFechado,          // 2ª - era a 5ª
    produtoAberto1,          // 3ª - fica
    produtoAberto2,          // 4ª - fica  
    produtoLateral,          // 5ª - era a 7ª
    produtoFuncional,        // 6ª - era a 8ª
    produtoAberto3,          // 7ª (penúltima) - era a 4ª
    produtoDimensoes         // 8ª (última) - era a 6ª
  ];

  // Preload first 3 images (current + next 2)
  const priorityImages = images.slice(0, 3);
  const { loadedImages } = useImagePreloader(priorityImages);

  // Sync with external selected image
  useEffect(() => {
    if (externalSelectedImage !== undefined) {
      setSelectedImage(externalSelectedImage);
    }
  }, [externalSelectedImage]);

  useEffect(() => {
    if (!api) {
      return;
    }

    // Sync carousel with selected image
    api.scrollTo(selectedImage);
  }, [api, selectedImage]);

  return (
    <div className="space-y-3 lg:space-y-4">
      {/* Main image */}
      <div className="aspect-square rounded-lg overflow-hidden bg-secondary relative">
        <OptimizedImage
          src={images[selectedImage]}
          alt="Armário de Sapatos"
          className="w-full h-full"
          priority={true}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
      </div>
      
      {/* Thumbnails - Mobile: Carousel */}
      <div className="lg:hidden">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent className="-ml-2">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-2 basis-1/5">
                <button
                  onClick={() => setSelectedImage(index)}
                  className={`w-full aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-primary' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <OptimizedImage
                    src={image}
                    alt={`Produto ${index + 1}`}
                    className="w-full h-full"
                    priority={index < 3}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Thumbnails - Desktop: Scroll */}
      <div className="hidden lg:flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === index ? 'border-primary' : 'border-border hover:border-primary/50'
            }`}
          >
            <OptimizedImage
              src={image}
              alt={`Produto ${index + 1}`}
              className="w-full h-full"
              priority={index < 3}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;