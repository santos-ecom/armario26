import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductDetails from "@/components/ProductDetails";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";
import FloatingBuyButton from "@/components/FloatingBuyButton";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-sm mx-auto bg-background">
        <Header />
        <Breadcrumb />
        
        <main className="px-4 py-4">
          {/* Single column layout - Mobile version for all devices */}
          <div className="space-y-6">
            <ProductGallery />
            <ProductInfo />
          </div>
        </main>
        
        <ProductDetails />
        
        <BenefitsSection />
        <Footer />
        <FloatingBuyButton />
      </div>
    </div>
  );
};

export default ProductPage;