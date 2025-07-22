import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "../custom/ui/section";
import { ArrowRight, CheckCircle } from "lucide-react";

export function ServicesOverview() {
  const features = [
    "Eco-friendly manufacturing",
    "Fair labor practices", 
    "Creative designs",
    "Customer-centric approach"
  ];

  return (
    <Section className="py-16 bg-background">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images Section */}
          <div className="relative">
            {/* Main large image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover-lift">
              <img 
                src="/assets/gallery/manufacturing-facility.jpg" 
                alt="Manufacturing facility showcasing our textile operations" 
                className="w-full h-80 object-cover"
              />
            </div>
            
            {/* Small overlay image */}
            <div className="absolute -bottom-6 -left-6 w-48 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-background">
              <img 
                src="/assets/gallery/premium-socks.jpg" 
                alt="Premium sock collection display" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 fade-in">
            {/* Header */}
            <div className="space-y-4">
              <div className="text-sm font-medium text-primary uppercase tracking-wider">
                Who We Are
              </div>
              <h2 className="heading-lg text-foreground">
                An Ultimate Textile Brand In
                <span className="block text-foreground mt-2">
                  Market Since 1998
                </span>
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover the perfect fusion of innovation, quality with compliance and performance.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Founded in 1998 Inter Market (IMK) has spent over 2 decades mastering the art of innovation, 
              compliance, and teamwork. Whether you're an athlete pushing your limits, an outdoor enthusiast 
              exploring the great outdoors, or someone who simply demands the best from their gear while 
              being conscientious about our earth and sustainability we have you covered.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button asChild size="lg" className="btn-primary group">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}