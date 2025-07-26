"use client";
import { cn } from "@/lib/utils";

export function GlassCard({ 
  children, 
  className,
  number,
  year,
  title,
  description,
  gradient = "from-blue-500 to-purple-600",
  showConnector = false
}) {
  return (
    <div className="relative group h-full">
      <div className={cn(
        "bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 h-full flex flex-col",
        className
      )}>
        <div className="space-y-6 flex-1">
          {/* Header with number and year */}
          <div className="flex items-center justify-between">
            <div className={cn(
              "w-12 h-12 bg-gradient-to-r rounded-xl flex items-center justify-center shadow-lg flex-shrink-0",
              gradient
            )}>
              <span className="text-lg font-bold text-white">{number}</span>
            </div>
            <div className="text-sm font-medium text-gray-300 bg-white/10 px-3 py-1 rounded-full">
              {year}
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-3 flex-1">
            <h3 className="font-semibold text-white text-lg leading-tight min-h-[3.5rem] flex items-center">
              {title}
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm flex-1">
              {description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Connection line for desktop */}
      {showConnector && (
        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-white/30 to-transparent"></div>
      )}
    </div>
  );
}

// Timeline container component for consistent spacing
export function GlassCardTimeline({ children, className }) {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
      className
    )}>
      {children}
    </div>
  );
} 