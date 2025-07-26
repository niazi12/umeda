import { Palette, Zap, Sparkles, ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PatternBackground } from "@/components/custom/ui/pattern-background";
import Link from "next/link";

export const CustomService = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Design Consultation",
      description: "Professional design consultation and visualization services"
    },
    {
      icon: Layers,
      title: "Pre-Production Approval", 
      description: "Complete design approval before manufacturing begins"
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Quick turnaround for design samples and testing"
    }
  ];

  return (
    <PatternBackground className="p-8" backgroundColor="bg-emerald-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Palette size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Custom Design Services
                </h3>
                <p className="text-sm text-emerald-100 font-medium">
                  From Concept to Production
                </p>
              </div>
            </div>
            <p className="text-emerald-50 text-lg leading-relaxed">
              Transform your ideas into reality with our comprehensive design
              services. Our expert team works with you from concept to
              production, ensuring your vision becomes a high-quality product.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center group-hover:bg-white/25 transition-colors duration-300">
                    <Icon size={18} className="text-white group-hover:text-emerald-100 transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">
                      {service.title}
                    </h4>
                    <p className="text-sm text-emerald-100 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center lg:text-right space-y-6">
          <div className="space-y-3">
            <h4 className="text-xl font-semibold text-white">
              Ready to Start Your Project?
            </h4>
            <p className="text-emerald-100">
              Explore our complete range of products and services
            </p>
          </div>
          
          <Button
            asChild
            size="lg"
            className="bg-white text-emerald-600 hover:bg-emerald-50 group shadow-lg w-full sm:w-auto font-semibold"
          >
            <Link
              href="/products"
              className="flex items-center justify-center"
            >
              <span>View All Products & Services</span>
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
          </Button>
        </div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl opacity-60"></div>
      <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/5 rounded-full blur-3xl opacity-40"></div>
    </PatternBackground>
  );
};
