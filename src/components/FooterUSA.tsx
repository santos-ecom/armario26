import { Clock, Phone, Mail } from "lucide-react";
import googleSafeBrowsing from "@/assets/google-safe-browsing.png";
import visaLogo from "@/assets/visa-logo.png";
import mastercardLogo from "@/assets/mastercard-logo.svg";
import amexLogo from "@/assets/amex-logo.png";
import discoverLogo from "@/assets/discover-logo.webp";

const FooterUSA = () => {
  return (
    <footer className="bg-primary text-primary-foreground pb-48">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8">
          {/* Customer Service */}
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-6">Customer Service</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 justify-center">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Support: Mon. to Fri.</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (302) 213-6478</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <span className="text-sm">501 SILVERSIDE RD, STE 105-714, WILMINGTON, DELAWARE, 19809</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Mail className="w-4 h-4" />
                <span className="text-sm">customer@espazie.com</span>
              </div>
            </div>
          </div>

          {/* Payment Methods and Verified Store */}
          <div>
            <div className="mb-8">
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-white rounded p-1 flex items-center justify-center h-10">
                  <img src={visaLogo} alt="Visa" className="h-6 w-auto" />
                </div>
                <div className="bg-white rounded p-1 flex items-center justify-center h-10">
                  <img src={mastercardLogo} alt="Mastercard" className="h-6 w-auto" />
                </div>
                <div className="bg-white rounded p-1 flex items-center justify-center h-10">
                  <img src={amexLogo} alt="American Express" className="h-6 w-auto" />
                </div>
                <div className="bg-white rounded p-1 flex items-center justify-center h-10">
                  <img src={discoverLogo} alt="Discover" className="h-6 w-auto" />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center">
                <img 
                  src={googleSafeBrowsing} 
                  alt="Google Safe Browsing - Verified Store" 
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterUSA;