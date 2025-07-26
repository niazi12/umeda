"use client";
import { cn } from "@/lib/utils";
import { Sparkles, Target, Zap, Package, Layers, Hexagon } from "lucide-react";

const iconMap = {
  0: Target,
  1: Package,
  2: Layers,
};

const iconColors = [
  {
    bg: "bg-blue-50 dark:bg-blue-950/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50",
    icon: "text-blue-600 dark:text-blue-400",
  },
  {
    bg: "bg-green-50 dark:bg-green-950/50 group-hover:bg-green-100 dark:group-hover:bg-green-900/50",
    icon: "text-green-600 dark:text-green-400",
  },
  {
    bg: "bg-purple-50 dark:bg-purple-950/50 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50",
    icon: "text-purple-600 dark:text-purple-400",
  },
];

export function ProductCard({ product, index }) {
  const Icon = iconMap[index] || Hexagon;
  const colorScheme = iconColors[index % iconColors.length];

  return (
    <div
      className={cn(
        "relative group p-6 rounded-2xl border bg-white dark:bg-gray-900 transition-all duration-300 ease-out",
        // Simple hover effects
        "hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg",
        // Clean borders
        "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
      )}
    >
      <div className="space-y-6">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
              colorScheme.bg
            )}>
              <Icon 
                size={24} 
                className={cn("transition-colors duration-300", colorScheme.icon)} 
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {product.title}
            </h3>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400">
            {product.description}
          </p>
          
          <div className={cn(
            "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium",
            "bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700",
            "text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
          )}>
            <Zap size={14} className="text-amber-500" />
            {product.capacity}
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-3">
          <h4 className="font-semibold flex items-center text-gray-900 dark:text-white">
            <Sparkles size={18} className="mr-2 text-amber-500" />
            Key Features
          </h4>
          
          <ul className="space-y-2.5">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm">
                <div className="w-2 h-2 rounded-full mr-3 bg-gray-400 dark:bg-gray-500" />
                <span className="text-gray-600 dark:text-gray-400">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 