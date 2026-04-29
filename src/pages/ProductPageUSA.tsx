import { useState } from "react";
import HeaderUSA from "@/components/HeaderUSA";
import ProductGallery from "@/components/ProductGallery";
import ProductInfoUSA from "@/components/ProductInfoUSA";
import ProductDetailsUSA from "@/components/ProductDetailsUSA";
import BenefitsSectionUSA from "@/components/BenefitsSectionUSA";
import FooterUSA from "@/components/FooterUSA";
import FloatingBuyButtonUSA from "@/components/FloatingBuyButtonUSA";

const ProductPageUSA = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full max-w-none md:max-w-sm md:mx-auto bg-background">
        <HeaderUSA />
        
        <main className="px-4 py-4">
          {/* Single column layout - Mobile version for all devices */}
          <div className="space-y-6">
            <ProductGallery externalSelectedImage={selectedImageIndex} />
            <ProductInfoUSA onVariantChange={setSelectedImageIndex} />
          </div>
        </main>
        
        <ProductDetailsUSA />
        
        <BenefitsSectionUSA />
        <FooterUSA />
        <FloatingBuyButtonUSA />
      </div>
    </div>
  );
};

export default ProductPageUSA;