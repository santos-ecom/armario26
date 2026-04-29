import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { appendUtmToUrl } from "@/utils/utm";

const FloatingBuyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra o botão quando a pessoa rola até a seção de descrição e mantém visível até o final
      const productDetails = document.querySelector('#product-details');
      if (productDetails) {
        const rect = productDetails.getBoundingClientRect();
        // Uma vez que a seção entra na tela, o botão permanece visível
        if (rect.top <= window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 max-w-sm mx-auto bg-transparent shadow-lg animate-slide-in-right ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
      <div className="p-4 space-y-3">
        {/* Seletor de variante */}
        <Select defaultValue="branco-carvalho">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione a cor" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="branco-carvalho">Branco com Carvalho + Brinde</SelectItem>
            <SelectItem value="branco-puro">Branco Puro + Brinde</SelectItem>
          </SelectContent>
        </Select>

        {/* Botão de comprar */}
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
          size="lg"
          onClick={() => window.open(appendUtmToUrl("https://shopee.com.br/produto-exemplo"), '_blank')}
        >
          COMPRAR
        </Button>
      </div>
    </div>
  );
};

export default FloatingBuyButton;