import { useState } from "react";
import HeaderPRIME from "@/components/HeaderPRIME";
import BreadcrumbPRIME from "@/components/BreadcrumbPRIME";
import ProductGallery from "@/components/ProductGallery";
import ProductInfoPRIME from "@/components/ProductInfoPRIME";
import ProductDetailsPRIME from "@/components/ProductDetailsPRIME";
import BenefitsSectionPRIME from "@/components/BenefitsSectionPRIME";
import FooterPRIME from "@/components/FooterPRIME";
import FloatingBuyButtonPRIME from "@/components/FloatingBuyButtonPRIME";

const ProductPagePRIME = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full max-w-none md:max-w-sm md:mx-auto bg-background">
        <HeaderPRIME />
        <BreadcrumbPRIME />
        
        <main className="px-4 py-4">
          {/* Single column layout - Mobile version for all devices */}
          <div className="space-y-6">
            <ProductGallery externalSelectedImage={selectedImageIndex} />
            <ProductInfoPRIME onVariantChange={setSelectedImageIndex} />
          </div>
        </main>
        
        <ProductDetailsPRIME />
        
        <BenefitsSectionPRIME />
        <FooterPRIME />
        <FloatingBuyButtonPRIME />
      </div>
    </div>
  );
};

export default ProductPagePRIME;
