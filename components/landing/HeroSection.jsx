"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={"/assets/hero-manufacturing.jpg"} 
          alt="UMEDA Manufacturing Facility" 
          className="w-full h-full object-cover opacity-20"
        />
       
      </div>

      {/* Content */}
      <div className="relative container-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="heading-xl">
                <span className="block">UMEDA</span>
                <span className="block text-accent">SB INDUSTRIES LTD</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-white/90">
                Being smart is the new business plan.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Bangladesh Korea joint venture specializing in professional B2B socks manufacturing. 
                We deliver quality, innovation, and reliability to global markets.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>6.24M+ pairs annually</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Global export expertise</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Advanced machinery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Custom design services</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8"
              >
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm text-lg px-8"
              >
                <Link href="/manufacturing">
                  <Play className="mr-2" size={20} />
                  View Manufacturing
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="lg:pl-12 slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="heading-sm mb-6">Manufacturing Excellence</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">4.2M</div>
                  <div className="text-sm text-white/70">Terry & Plain Socks</div>
                  <div className="text-xs text-white/60">pairs/year</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">2.04M</div>
                  <div className="text-sm text-white/70">Toe Socks</div>
                  <div className="text-xs text-white/60">pairs/year</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">3</div>
                  <div className="text-sm text-white/70">Export Markets</div>
                  <div className="text-xs text-white/60">Japan, Korea, Canada</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">10+</div>
                  <div className="text-sm text-white/70">Raw Materials</div>
                  <div className="text-xs text-white/60">Premium quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary-light/20 rounded-full blur-3xl"></div>
    </section>
  );
}
