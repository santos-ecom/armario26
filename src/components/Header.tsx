import { Search, ShoppingCart, Truck, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import espazieLog from "@/assets/espazie-logo.png";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        Frete Grátis para todo o Mundo 🌎
      </div>
      
      {/* Main header - Mobile layout only */}
      <div className="px-4 py-3" style={{ backgroundColor: '#FEF9F3' }}>
        {/* Only Logo */}
        <div className="flex items-center justify-center">
          <img src={espazieLog} alt="ESPAZIE" className="h-8" />
        </div>
      </div>
      
      {/* Navigation - Hidden */}
    </header>
  );
};

export default Header;