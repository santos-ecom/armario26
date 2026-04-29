import promocaoBrinde from "@/assets/promocao-brinde-nova.png";
import descricao2 from "@/assets/descricao-2-usa.png";
import descricao3 from "@/assets/descricao-3-usa.png";
import descricao4 from "@/assets/descricao-4-usa.png";
import descricao5 from "@/assets/descricao-5-usa.png";
import descricao6 from "@/assets/descricao-6-usa.png";
import descricao7 from "@/assets/descricao-7-usa.png";
import descricao8 from "@/assets/descricao-8-usa.png";
import OptimizedImage from "@/components/OptimizedImage";
import { useImagePreloadGroup } from "@/hooks/useImagePreloadGroup";

const ProductDetailsUSA = () => {
  const images = [
    { src: promocaoBrinde, alt: "Promotion: Buy today and get a free travel bag with shoe compartment", priority: true },
    { src: descricao2, alt: "Transform your space - Oak Shoe Storage Cabinet - Organization, Style & Durability in One Product!", priority: false },
    { src: descricao3, alt: "Space Economy - Efficient storage solution", priority: false },
    { src: descricao4, alt: "Ample storage capacity without taking up much space - Ideal for those who want to optimize the environment", priority: false },
    { src: descricao5, alt: "Product dimensions - 1.20m height, 80cm width, 24cm depth", priority: false },
    { src: descricao6, alt: "Dust Protection - 3 closed doors ensure your shoes remain protected from dust and dirt", priority: false },
    { src: descricao7, alt: "Safe Delivery - Track your order in real time and receive it with total security. 100% money back guarantee", priority: false },
    { src: descricao8, alt: "Espazie Guarantee - Security: 100% secure payments with total data protection. Free shipping worldwide with insurance. Order tracking with email updates", priority: false }
  ];

  // Preload all images simultaneously
  const { allImagesLoaded } = useImagePreloadGroup(images);

  return (
    <div id="product-details">
      {images.map((image, index) => (
        <section key={index} className="bg-card">
          <div className="bg-white">
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              className={`w-full h-auto object-contain block transition-opacity duration-300 ${
                allImagesLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              priority={true}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductDetailsUSA;