import { ChevronRight } from "lucide-react";

const BreadcrumbPRIME = () => {
  const items = [
    { label: "Home", href: "/" },
    { label: "All products", href: "/produtos" },
    { label: "3-Door Shoe Cabinet with 2 Drawers...", href: "#" }
  ];

  return (
    <nav className="hidden lg:block container mx-auto px-4 py-4">
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <a 
              href={item.href} 
              className={`hover:text-foreground transition-colors ${
                index === items.length - 1 ? 'text-foreground font-medium' : ''
              }`}
            >
              {item.label}
            </a>
            {index < items.length - 1 && (
              <ChevronRight className="h-4 w-4 mx-2" />
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default BreadcrumbPRIME;
