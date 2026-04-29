import { Truck, ShieldCheck, Headphones, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const BenefitsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const benefits = [
    {
      icon: Truck,
      title: "Envio para todo o Mundo",
      description: "Entrega via DHL com código de rastreio."
    },
    {
      icon: ShieldCheck,
      title: "Compra Garantida",
      description: "Garantia de entrega ou dinheiro de volta."
    },
    {
      icon: Headphones,
      title: "Suporte Rápido",
      description: "Atendimento de segunda à sábado."
    },
    {
      icon: CreditCard,
      title: "Pagamento seguro",
      description: "Ambiente totalmente seguro para pagamentos."
    }
  ];

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Mobile layout for all devices - Carousel */}
        <div>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {benefits.map((benefit, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="mb-4">
                      <benefit.icon className="w-12 h-12 text-primary mx-auto" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Pagination dots */}
          <div className="flex justify-center space-x-2 mt-4">
            {benefits.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current ? 'bg-primary' : 'bg-primary/30'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;