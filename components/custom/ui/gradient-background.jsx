"use client";
import { cn } from "@/lib/utils";

// Gradient presets
const gradientPresets = {
  default: "from-gray-900 to-gray-800",
  aurora: "from-purple-600 via-pink-600 to-blue-600",
  ocean: "from-blue-600 via-cyan-600 to-teal-700",
  sunset: "from-orange-500 via-red-600 to-pink-700",
  forest: "from-emerald-600 via-green-600 to-teal-700",
  midnight: "from-gray-900 via-blue-900 to-indigo-900",
  violet: "from-violet-600 via-purple-600 to-indigo-700",
  slate: "from-slate-900 to-slate-700",
  zinc: "from-zinc-900 to-zinc-700",
  neutral: "from-neutral-900 to-neutral-700",
  warm: "from-orange-900 to-red-900",
  cool: "from-blue-900 to-indigo-900"
};

export function GradientBackground({ 
  children, 
  className,
  gradient = "default", // Now accepts preset names or custom gradient classes
  padding = "xl"
}) {
  const paddingClasses = {
    sm: "p-4",
    md: "p-8", 
    lg: "p-12",
    xl: "p-16"
  };

  // Use preset if it exists, otherwise use the gradient string directly
  const selectedGradient = gradientPresets[gradient] || gradient;

  return (
    <div className={cn(
      "bg-gradient-to-br",
      selectedGradient,
      paddingClasses[padding],
      className
    )}>
      {children}
    </div>
  );
} 