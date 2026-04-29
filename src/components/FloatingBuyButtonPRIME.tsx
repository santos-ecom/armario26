import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const FloatingBuyButtonPRIME = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const freeReturnsSection = document.querySelector('#free-returns-section');
      
      if (freeReturnsSection) {
        const freeReturnsRect = freeReturnsSection.getBoundingClientRect();
        
        // Show button only when the "30 days" section has passed (is above viewport)
        const shouldShow = freeReturnsRect.bottom < 0;
        
        setIsVisible(shouldShow);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToQuantitySection = () => {
    // Scroll to the quantity selection section
    const quantitySection = document.querySelector('#quantity-section');
    if (quantitySection) {
      quantitySection.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    } else {
      // Fallback to scroll to top if section not found
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 left-4 right-4 z-40 max-w-sm mx-auto animate-slide-in-right ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
      <div className="p-4">
        {/* Buy button */}
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 border-[0.5px] border-black"
          size="lg"
          onClick={scrollToQuantitySection}
        >
          BUY NOW
        </Button>
      </div>
    </div>
  );
};

export default FloatingBuyButtonPRIME;
