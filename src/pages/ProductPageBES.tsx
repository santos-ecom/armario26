import { useState } from "react";
import HeaderBES from "@/components/HeaderBES";
import BreadcrumbBES from "@/components/BreadcrumbBES";
import ProductGallery from "@/components/ProductGallery";
import ProductInfoBES from "@/components/ProductInfoBES";
import ProductDetailsBES from "@/components/ProductDetailsBES";
import BenefitsSectionBES from "@/components/BenefitsSectionBES";
import FooterBES from "@/components/FooterBES";
import FloatingBuyButtonBES from "@/components/FloatingBuyButtonBES";

const ProductPageBES = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full max-w-none md:max-w-sm md:mx-auto bg-background">
        <HeaderBES />
        <BreadcrumbBES />
        
        <main className="px-4 py-4">
          {/* Single column layout - Mobile version for all devices */}
          <div className="space-y-6">
            <ProductGallery externalSelectedImage={selectedImageIndex} />
            <ProductInfoBES onVariantChange={setSelectedImageIndex} />
          </div>
        </main>
        
        <ProductDetailsBES />
        
        <BenefitsSectionBES />
        <FooterBES />
        <FloatingBuyButtonBES />
      </div>
    </div>
  );
};

export default ProductPageBES;
