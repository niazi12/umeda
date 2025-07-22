import { cn } from "@/lib/utils";



const containerSizes = {
  sm: "max-w-4xl",
  md: "max-w-6xl",
  lg: "max-w-7xl",
  xl: "max-w-8xl",
  full: "max-w-full"
};

export function Container({ children, className, size = "lg" }) {
  return (
    <div className={cn(
      "mx-auto px-4 sm:px-6 lg:px-8",
      containerSizes[size],
      className
    )}>
      {children}
    </div>
  );
}