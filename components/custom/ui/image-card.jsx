"use client";
import { cn } from "@/lib/utils";

export function ImageCard({ 
  src, 
  alt, 
  title, 
  subtitle, 
  className,
  imageClassName,
  overlayClassName,
  contentClassName 
}) {
  return (
    <div className={cn(
      "relative rounded-xl overflow-hidden group hover-lift",
      className
    )}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500",
          imageClassName
        )}
      />
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent",
        overlayClassName
      )}>
        <div className={cn(
          "absolute bottom-6 left-6 text-white",
          contentClassName
        )}>
          <h3 className="text-xl font-semibold">{title}</h3>
          {subtitle && (
            <p className="text-sm opacity-90">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
} 