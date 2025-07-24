"use client";
import { Section } from "@/components/custom/ui/section";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Award,
  Sparkles,
  Target,

} from "lucide-react";
import Link from "next/link";
import { CustomService } from "./custom-service";
import { ProductCard } from "./product-card";

export function ProductSection() {
  const statsData = [
    { number: "6.24M+", label: "Pairs Annually", sublabel: "Total Production" },
    { number: "3", label: "Product Lines", sublabel: "Specialized Categories" },
    { number: "10+", label: "Raw Materials", sublabel: "Premium Quality" },
    { number: "3", label: "Export Markets", sublabel: "Global Reach" },
  ];

  const products = [
    {
      title: "Plain Socks",
      description:
        "High-quality plain socks for everyday comfort and durability",
      capacity: "Included in 4.2M pairs/year",
      features: [
        "Multiple colors",
        "Various sizes",
        "Bulk orders",
        "Custom branding",
      ],
    },
    {
      title: "Terry Socks",
      description:
        "Soft, absorbent terry socks perfect for comfort and performance",
      capacity: "Included in 4.2M pairs/year",
      features: [
        "Superior comfort",
        "Moisture wicking",
        "Athletic performance",
        "Long lasting",
      ],
    },
    {
      title: "Toe Socks",
      description:
        "Innovative toe socks providing individual toe comfort and freedom",
      capacity: "2.04M pairs/year",
      features: [
        "Individual toe pockets",
        "Enhanced circulation",
        "Blister prevention",
        "Specialized comfort",
      ],
      highlighted: true,
    },
  ];

  return (
    <Section className={cn("py-16 bg-background")}>
      <div className="container-width">
        {/* Stats Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 mb-16 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center space-y-4 mb-12">
              <h2 className="heading-lg text-white">
                Manufacturing Excellence in Numbers
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Delivering quality at scale with precision manufacturing and
                innovative design solutions
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover-lift"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-white/90">
                    {stat.label}
                  </div>
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
            Comprehensive socks manufacturing solutions designed for global B2B
            markets. From plain essentials to innovative toe socks, we deliver
            quality at scale.
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

        {/* Products Grid - Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>

        <CustomService />
      </div>
    </Section>
  );
}
