"use client";
import { cn } from "@/lib/utils";

export function PatternBackground({ 
  children, 
  className,
  patternOpacity = "0.1",
  patternColor = "ffffff",
  backgroundColor = "bg-blue-800",
  variant = "circles", // "circles" or "minimal"
  rounded = true // whether to apply rounded corners
}) {
  const patterns = {
    circles: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${patternColor}' fill-opacity='${patternOpacity}'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
    minimal: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23${patternColor}' stroke-width='1' stroke-opacity='${patternOpacity}'%3E%3Cpath d='M30 0v60M0 30h60'/%3E%3C/g%3E%3C/svg%3E")`
  };

  const patternSvg = patterns[variant] || patterns.circles;

  return (
    <div className={cn(
      backgroundColor,
      "text-white relative overflow-hidden",
      rounded && "rounded-2xl",
      className
    )}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full bg-repeat" 
          style={{
            backgroundImage: patternSvg
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 