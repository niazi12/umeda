"use client";
import { cn } from "@/lib/utils";
import { Sparkles, Target, Zap, Package, Layers, Hexagon } from "lucide-react";

const iconMap = {
  0: Target,
  1: Package,
  2: Layers,
};

const colorSchemes = [
  {
    gradient: "from-violet-600 to-indigo-600",
    shadow: "hover:shadow-violet-500/25",
    iconBg: "bg-violet-500/10 group-hover:bg-violet-500/20",
    iconColor: "text-violet-600",
    borderGlow: "hover:border-violet-500/50",
    featureDot: "bg-violet-500",
  },
  {
    gradient: "from-cyan-600 to-blue-600",
    shadow: "hover:shadow-cyan-500/25",
    iconBg: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
    iconColor: "text-cyan-600",
    borderGlow: "hover:border-cyan-500/50",
    featureDot: "bg-cyan-500",
  },
  {
    gradient: "from-pink-600 to-rose-600",
    shadow: "hover:shadow-pink-500/25",
    iconBg: "bg-pink-500/10 group-hover:bg-pink-500/20",
    iconColor: "text-pink-600",
    borderGlow: "hover:border-pink-500/50",
    featureDot: "bg-pink-500",
  },
];

export function ProductCard({ product, index }) {
  const colorScheme = colorSchemes[index % colorSchemes.length];
  const Icon = iconMap[index] || Hexagon;

  return (
    <div
      className={cn(
        "relative group p-6 rounded-2xl border-2 bg-white dark:bg-gray-900 transition-all duration-500 ease-out overflow-hidden",
        // Base effects
        "hover:scale-[1.02] hover:-translate-y-1",
        // Shadow with color
        "hover:shadow-2xl",
        colorScheme.shadow,
        // Border color change
        "border-gray-200 dark:border-gray-800",
        colorScheme.borderGlow
      )}
    >
      {/* Animated gradient background on hover */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700",
        "bg-gradient-to-br",
        colorScheme.gradient
      )} />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent" />
      </div>

      {/* Floating orbs */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700 group-hover:scale-150" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-900 group-hover:scale-125" />

      <div className="relative z-10 space-y-6">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500",
              colorScheme.iconBg,
              "group-hover:scale-110 group-hover:rotate-3"
            )}>
              <Icon 
                size={24} 
                className={cn(
                  "transition-all duration-500",
                  colorScheme.iconColor,
                  "group-hover:scale-110 group-hover:text-white"
                )} 
              />
            </div>
            <h3 className={cn(
              "text-xl font-bold text-gray-900 dark:text-white transition-all duration-300",
              "group-hover:text-white"
            )}>
              {product.title}
            </h3>
          </div>
          
          <p className={cn(
            "text-gray-600 dark:text-gray-400 transition-all duration-300",
            "group-hover:text-white/90"
          )}>
            {product.description}
          </p>
          
          <div className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-500",
            "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
            "group-hover:bg-white/20 group-hover:text-white group-hover:backdrop-blur-sm"
          )}>
            <Zap size={14} className="group-hover:animate-pulse" />
            {product.capacity}
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-3">
          <h4 className={cn(
            "font-semibold flex items-center text-gray-900 dark:text-white transition-all duration-300",
            "group-hover:text-white"
          )}>
            <Sparkles 
              size={18} 
              className={cn(
                "mr-2 transition-all duration-500",
                colorScheme.iconColor,
                "group-hover:text-yellow-300 group-hover:rotate-12"
              )} 
            />
            Key Features
          </h4>
          
          <ul className="space-y-2.5">
            {product.features.map((feature, idx) => (
              <li 
                key={idx} 
                className={cn(
                  "flex items-center text-sm transition-all duration-300 transform",
                  "group-hover:translate-x-1"
                )}
                style={{ 
                  transitionDelay: `${idx * 50}ms` 
                }}
              >
                <div className={cn(
                  "w-2 h-2 rounded-full mr-3 transition-all duration-500",
                  colorScheme.featureDot,
                  "group-hover:scale-125 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-white/50"
                )} />
                <span className={cn(
                  "text-gray-600 dark:text-gray-400 transition-all duration-300",
                  "group-hover:text-white/95 group-hover:font-medium"
                )}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Animated border gradient */}
      <div className={cn(
        "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
      )}>
        <div className={cn(
          "absolute inset-[1px] rounded-2xl bg-gradient-to-br",
          colorScheme.gradient,
          "opacity-50 blur-sm"
        )} />
      </div>
    </div>
  );
} 