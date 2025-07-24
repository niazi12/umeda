import { Palette, Zap, Sparkles, ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CustomService = () => {
  return (
    <div className="bg-gradient-secondary rounded-2xl p-8 text-white relative overflow-hidden">
      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Palette size={24} className="text-white" />
                </div>
                <h3 className="heading-md text-white">
                  Custom Design Services
                </h3>
              </div>
              <p className="text-white/90 text-lg">
                Transform your ideas into reality with our comprehensive design
                services. Our expert team works with you from concept to
                production, ensuring your vision becomes a high-quality product.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-0.5">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white">
                    Design Consultation
                  </h4>
                  <p className="text-sm text-white/80">
                    Professional design consultation and visualization services
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-0.5">
                  <Layers size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white">
                    Pre-Production Approval
                  </h4>
                  <p className="text-sm text-white/80">
                    Complete design approval before manufacturing begins
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-0.5">
                  <Zap size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Rapid Prototyping</h4>
                  <p className="text-sm text-white/80">
                    Quick turnaround for design samples and testing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-right">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 group shadow-lg w-full sm:w-auto"
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
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 right-8 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-8 left-8 w-28 h-28 bg-white/5 rounded-full blur-xl"></div>
    </div>
  );
};
