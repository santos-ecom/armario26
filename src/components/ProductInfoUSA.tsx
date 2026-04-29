import { useState } from "react";
import { Star, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { appendUtmToUrl } from "@/utils/utm";

interface ProductInfoUSAProps {
  onVariantChange?: (imageIndex: number) => void;
}

const ProductInfoUSA = ({ onVariantChange }: ProductInfoUSAProps) => {
  const [selectedVariant, setSelectedVariant] = useState("white-oak");
  const [selectedQuantity, setSelectedQuantity] = useState("1");

  const variants = [
    { id: "white-oak", label: "White with Oak + Free Gift" },
    { id: "pure-white", label: "Pure White + Free Gift" }
  ];

  const quantityOptions = [
    {
      id: "1",
      quantity: 1,
      originalPrice: 289.90,
      salePrice: 29.00,
      discount: "90%",
      label: "1 Unit"
    },
    {
      id: "2", 
      quantity: 2,
      originalPrice: 579.80,
      salePrice: 45.00,
      discount: "92%",
      label: "2 Units",
      savings: "Save $13.00",
      popular: true
    },
    {
      id: "3",
      quantity: 3,
      originalPrice: 869.70,
      salePrice: 58.00,
      discount: "93%",
      label: "3 Units",
      savings: "Save $29.00"
    },
    {
      id: "4",
      quantity: 4,
      originalPrice: 1159.60,
      salePrice: 78.00,
      discount: "93%",
      label: "4 Units",
      savings: "Save $38.00"
    },
    {
      id: "5",
      quantity: 5,
      originalPrice: 1449.50,
      salePrice: 99.00,
      discount: "93%",
      label: "5 Units",
      savings: "Save $46.00"
    }
  ];

  const checkoutUrls = {
    "white-oak": {
      "1": "https://espazzie.shop/checkout/?add-to-cart=9457",
      "2": "https://espazzie.shop/checkout/?add-to-cart=9463",
      "3": "https://espazzie.shop/checkout/?add-to-cart=9464",
      "4": "https://espazzie.shop/checkout/?add-to-cart=9465",
      "5": "https://espazzie.shop/checkout/?add-to-cart=9466"
    },
    "pure-white": {
      "1": "https://espazzie.shop/checkout/?add-to-cart=9467",
      "2": "https://espazzie.shop/checkout/?add-to-cart=9472",
      "3": "https://espazzie.shop/checkout/?add-to-cart=9473",
      "4": "https://espazzie.shop/checkout/?add-to-cart=9474",
      "5": "https://espazzie.shop/checkout/?add-to-cart=9475"
    }
  };

  const getSelectedUrl = () => {
    return checkoutUrls[selectedVariant as keyof typeof checkoutUrls][selectedQuantity as keyof typeof checkoutUrls["white-oak"]] || checkoutUrls["white-oak"]["1"];
  };

  const getSelectedPrice = () => {
    const option = quantityOptions.find(option => option.id === selectedQuantity);
    return option ? option.salePrice : quantityOptions[0].salePrice;
  };

  const selectedOption = quantityOptions.find(option => option.id === selectedQuantity) || quantityOptions[0];

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Sold count and flash offer */}
      <div className="flex items-center gap-2 lg:gap-4 flex-wrap">
        <span className="text-xs lg:text-sm text-muted-foreground">3071 SOLD</span>
        <Badge variant="destructive" className="bg-destructive text-destructive-foreground text-xs">
          FLASH OFFER ⚡
        </Badge>
      </div>

      {/* Title */}
      <h1 className="text-lg lg:text-2xl font-bold text-foreground leading-tight">
        3-Door Shoe Cabinet with 2 Drawers + Free Backpack Gift
      </h1>

      {/* Rating */}
      <div className="flex items-center space-x-2">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3 w-3 lg:h-4 lg:w-4 fill-warning text-warning" />
          ))}
        </div>
        <span className="text-sm font-medium">5</span>
        <span className="text-xs lg:text-sm text-muted-foreground">1k Reviews</span>
      </div>

      {/* Price */}
      <div className="space-y-1 lg:space-y-2">
        <div className="flex items-baseline space-x-2">
          <span className="text-sm text-price-original line-through">
            ${selectedOption.originalPrice ? selectedOption.originalPrice.toFixed(2) : '289.90'}
          </span>
          <Badge variant="destructive" className="text-xs">
            ↓ {selectedOption.discount || '93%'}
          </Badge>
        </div>
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl lg:text-3xl font-bold text-price-sale">${getSelectedPrice().toFixed(2)}</span>
        </div>
      </div>

      {/* Color variants */}
      <div className="space-y-2 lg:space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">COLOR:</span>
          <span className="text-sm font-bold uppercase">WHITE WITH OAK + FREE GIFT</span>
        </div>
        
        <div className="space-y-2">
          {variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => {
                setSelectedVariant(variant.id);
                const imageIndex = variant.id === "white-oak" ? 0 : 4;
                onVariantChange?.(imageIndex);
              }}
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

      {/* Quantity Selection */}
      <div id="quantity-section" className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">QUANTITY:</span>
        </div>
        
        <RadioGroup value={selectedQuantity} onValueChange={setSelectedQuantity} className="space-y-2">
          {quantityOptions.map((option) => (
            <div key={option.id} className="relative">
              <Label
                htmlFor={option.id}
                className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all ${
                  selectedQuantity === option.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value={option.id} id={option.id} />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-sm">{option.label}</span>
                      {option.popular && (
                        <Badge variant="destructive" className="text-xs px-2 py-0.5">
                          Most Popular
                        </Badge>
                      )}
                    </div>
                    {option.savings && (
                      <span className="text-xs text-foreground font-medium">{option.savings}</span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-price-sale">${option.salePrice.toFixed(2)}</div>
                  <div className="text-xs text-price-original line-through">${option.originalPrice.toFixed(2)}</div>
                </div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Buy Button with Quantity Selector */}
      <div className="space-y-4">
        <div className="flex items-center justify-center lg:justify-start space-x-4">
          <div className="flex items-center border rounded-lg flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const currentQty = parseInt(selectedQuantity);
                if (currentQty > 1) {
                  setSelectedQuantity((currentQty - 1).toString());
                }
              }}
              className="h-10 w-6 px-0"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="px-1 py-2 min-w-[20px] text-center text-sm">{selectedQuantity}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const currentQty = parseInt(selectedQuantity);
                if (currentQty < 5) {
                  setSelectedQuantity((currentQty + 1).toString());
                }
              }}
              className="h-10 w-6 px-0"
              disabled={parseInt(selectedQuantity) >= 5}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <Button 
            size="lg" 
            className="flex-1 h-12 lg:h-14 text-base lg:text-lg font-semibold"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).fbq) {
                (window as any).fbq('track', 'InitiateCheckout');
              }
              window.open(appendUtmToUrl(getSelectedUrl()), '_blank');
            }}
          >
            BUY NOW
          </Button>
        </div>

        {/* Free returns */}
        <div id="free-returns-section" className="bg-muted/20 rounded-lg p-4 border border-muted/30">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 rounded-full bg-success text-success-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-sm font-semibold">↻</span>
            </div>
            <div className="space-y-1">
              <h4 className="font-semibold text-foreground text-sm">Free Returns</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                30 days after receiving the merchandise
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoUSA;