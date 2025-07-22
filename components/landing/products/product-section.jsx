"use client"
import { Section } from "@/components/custom/ui/section";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Award, Sparkles, Target, Zap, Palette, ArrowRight, Layers } from "lucide-react";
import Link from "next/link";

export function ProductSection() {
  const statsData = [
    { number: "6.24M+", label: "Pairs Annually", sublabel: "Total Production" },
    { number: "3", label: "Product Lines", sublabel: "Specialized Categories" },
    { number: "10+", label: "Raw Materials", sublabel: "Premium Quality" },
    { number: "3", label: "Export Markets", sublabel: "Global Reach" }
  ];

  const products = [
    {
      title: "Plain Socks",
      description: "High-quality plain socks for everyday comfort and durability",
      capacity: "Included in 4.2M pairs/year",
      features: ["Multiple colors", "Various sizes", "Bulk orders", "Custom branding"]
    },
    {
      title: "Terry Socks",
      description: "Soft, absorbent terry socks perfect for comfort and performance",
      capacity: "Included in 4.2M pairs/year",
      features: ["Superior comfort", "Moisture wicking", "Athletic performance", "Long lasting"]
    },
    {
      title: "Toe Socks",
      description: "Innovative toe socks providing individual toe comfort and freedom",
      capacity: "2.04M pairs/year",
      features: ["Individual toe pockets", "Enhanced circulation", "Blister prevention", "Specialized comfort"],
      highlighted: true
    }
  ];

  return (
    <Section className={cn("py-16 bg-background")}>
      <div className="container-width">
        {/* Stats Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 mb-16 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center space-y-4 mb-12">
              <h2 className="heading-lg text-white">Manufacturing Excellence in Numbers</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Delivering quality at scale with precision manufacturing and innovative design solutions
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover-lift">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-white/90">{stat.label}</div>
                  <div className="text-sm text-white/70">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        </div>

        {/* Header */}
        <div className="text-center space-y-4 mb-16 fade-in">
          <h2 className="heading-lg">Our Product Range</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive socks manufacturing solutions designed for global B2B markets. 
            From plain essentials to innovative toe socks, we deliver quality at scale.
          </p>
        </div>

        {/* Hero Product Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-xl overflow-hidden group hover-lift">
            <img 
              src="/assets/socks-collection.jpg" 
              alt="Various Socks Collection" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold">Premium Collection</h3>
                <p className="text-sm opacity-90">Plain & Terry Socks</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden group hover-lift">
            <img 
              src="/assets/toe-socks-feature.jpg" 
              alt="Toe Socks Innovation" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold">Innovation Leader</h3>
                <p className="text-sm opacity-90">Specialized Toe Socks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid - Clean Modern Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`card-professional hover-lift group ${
                product.highlighted 
                  ? 'ring-2 ring-primary bg-primary/5' 
                  : 'hover:ring-1 hover:ring-border'
              }`}
            >
              {product.highlighted && (
                <div className="absolute -top-3 left-6">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-md">
                    <Award size={12} className="mr-1" />
                    Specialty Product
                  </div>
                </div>
              )}
              
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Target size={20} className="text-primary" />
                    </div>
                    <h3 className="heading-sm text-foreground">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {product.description}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {product.capacity}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-medium flex items-center text-foreground">
                    <Sparkles size={16} className="mr-2 text-primary" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        <span className="text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section - Clean Design */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Palette size={24} className="text-white" />
                    </div>
                    <h3 className="heading-md text-white">Custom Design Services</h3>
                  </div>
                  <p className="text-white/90 text-lg">
                    Transform your ideas into reality with our comprehensive design services. 
                    Our expert team works with you from concept to production, ensuring your 
                    vision becomes a high-quality product.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-0.5">
                      <Sparkles size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Design Consultation</h4>
                      <p className="text-sm text-white/80">Professional design consultation and visualization services</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-0.5">
                      <Layers size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Pre-Production Approval</h4>
                      <p className="text-sm text-white/80">Complete design approval before manufacturing begins</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-0.5">
                      <Zap size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Rapid Prototyping</h4>
                      <p className="text-sm text-white/80">Quick turnaround for design samples and testing</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 group shadow-lg w-full sm:w-auto">
                  <Link href="/products" className="flex items-center justify-center">
                    <span>View All Products & Services</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-8 right-8 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-8 left-8 w-28 h-28 bg-white/5 rounded-full blur-xl"></div>
        </div>
      </div>
    </Section>
  );
}