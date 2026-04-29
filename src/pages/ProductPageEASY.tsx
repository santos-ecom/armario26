import { useState } from "react";
import HeaderEASY from "@/components/HeaderEASY";
import BreadcrumbEASY from "@/components/BreadcrumbEASY";
import ProductGallery from "@/components/ProductGallery";
import ProductInfoEASY from "@/components/ProductInfoEASY";
import ProductDetailsEASY from "@/components/ProductDetailsEASY";
import BenefitsSectionEASY from "@/components/BenefitsSectionEASY";
import FooterEASY from "@/components/FooterEASY";
import FloatingBuyButtonEASY from "@/components/FloatingBuyButtonEASY";

const ProductPageEASY = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full max-w-none md:max-w-sm md:mx-auto bg-background">
        <HeaderEASY />
        <BreadcrumbEASY />
        
        <main className="px-4 py-4">
          {/* Single column layout - Mobile version for all devices */}
          <div className="space-y-6">
            <ProductGallery externalSelectedImage={selectedImageIndex} />
            <ProductInfoEASY onVariantChange={setSelectedImageIndex} />
          </div>
        </main>
        
        <ProductDetailsEASY />
        
        <BenefitsSectionEASY />
        <FooterEASY />
        <FloatingBuyButtonEASY />
      </div>
    </div>
  );
};

export default ProductPageEASY;
