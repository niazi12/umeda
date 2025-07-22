import { cn } from "@/lib/utils";


const sizes = {
  sm: "text-lg font-semibold",
  md: "text-xl font-semibold",
  lg: "text-2xl font-bold",
  xl: "text-3xl sm:text-4xl font-bold",
  "2xl": "text-4xl sm:text-5xl font-bold",
  "3xl": "text-5xl sm:text-6xl font-bold",
  "4xl": "text-6xl sm:text-7xl font-bold"
};

export function Heading({ 
  children, 
  level = 2, 
  size = "lg", 
  gradient = false, 
  className,
  as 
}) {
  const Component = as || (`h${level}`);
  
  return (
    <Component className={cn(
      sizes[size],
      "tracking-tight",
      gradient && "text-gradient",
      className
    )}>
      {children}
    </Component>
  );
}