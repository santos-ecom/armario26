import promocaoBrinde from "@/assets/promocao-brinde-nova.png";
import OptimizedImage from "@/components/OptimizedImage";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ProductDetails = () => {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '200px'
  });

  return (
    <div id="product-details" ref={ref}>
      {/* Promoção do Brinde */}
      <section className="bg-card">
        <div className="bg-white">
          <OptimizedImage
            src={promocaoBrinde}
            alt="Promoção: Comprando hoje você ganha uma bolsa de viagem com compartimento para sapatos"
            className="w-full h-auto object-contain block"
            priority={false}
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;