import { useState } from "react";
import { Star, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { appendUtmToUrl } from "@/utils/utm";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("branco-carvalho");

  const variants = [
    { id: "branco-carvalho", label: "Branco com Carvalho + Brinde" },
    { id: "branco-puro", label: "Branco Puro + Brinde" }
  ];

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Sold count and flash offer */}
      <div className="flex items-center gap-2 lg:gap-4 flex-wrap">
        <span className="text-xs lg:text-sm text-muted-foreground">3071 VENDIDOS</span>
        <Badge variant="destructive" className="bg-destructive text-destructive-foreground text-xs">
          OFERTA RELÂMPAGO ⚡
        </Badge>
      </div>

      {/* Title */}
      <h1 className="text-lg lg:text-2xl font-bold text-foreground leading-tight">
        Armário de Sapatos com 3 Portas e 2 Gavetas + Mochila Brinde
      </h1>

      {/* Rating */}
      <div className="flex items-center space-x-2">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3 w-3 lg:h-4 lg:w-4 fill-warning text-warning" />
          ))}
        </div>
        <span className="text-sm font-medium">5</span>
        <span className="text-xs lg:text-sm text-muted-foreground">1mil Avaliações</span>
      </div>

      {/* Price */}
      <div className="space-y-1 lg:space-y-2">
        <div className="flex items-baseline space-x-2">
          <span className="text-sm text-price-original line-through">R$ 289,90</span>
          <Badge variant="destructive" className="text-xs">↓ 93%</Badge>
        </div>
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl lg:text-3xl font-bold text-price-sale">R$ 19,00</span>
        </div>
      </div>

      {/* Color variants */}
      <div className="space-y-2 lg:space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">COR:</span>
          <span className="text-sm font-bold uppercase">BRANCO COM CARVALHO + BRINDE</span>
        </div>
        
        <div className="space-y-2">
          {variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariant(variant.id)}
              className={`w-full p-2 lg:p-3 text-left text-sm border rounded-lg transition-all ${
                selectedVariant === variant.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {variant.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity and Buy */}
      <div className="space-y-4">
        <div className="flex items-center justify-center lg:justify-start space-x-4">
          <div className="flex items-center border rounded-lg flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-10 w-6 px-0"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="px-1 py-2 min-w-[20px] text-center text-sm">{quantity}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity(Math.min(5, quantity + 1))}
              className="h-10 w-6 px-0"
              disabled={quantity >= 5}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <Button 
            size="lg" 
            className="flex-1 h-12 lg:h-14 text-base lg:text-lg font-semibold"
            onClick={() => window.open(appendUtmToUrl("https://shopee.com.br/produto-exemplo"), '_blank')}
          >
            COMPRAR AGORA
          </Button>
        </div>

        {/* Free returns - Melhor formatação */}
        <div className="bg-muted/20 rounded-lg p-4 border border-muted/30">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 rounded-full bg-success text-success-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-sm font-semibold">↻</span>
            </div>
            <div className="space-y-1">
              <h4 className="font-semibold text-foreground text-sm">Devoluções Gratuitas</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                30 dias após o recebimento da mercadoria
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;