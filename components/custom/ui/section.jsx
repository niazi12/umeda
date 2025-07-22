import { cn } from "@/lib/utils";
import { Container } from "./container";



const paddingSizes = {
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-16",
  lg: "py-16 sm:py-24",
  xl: "py-24 sm:py-32"
};

const backgrounds = {
  default: "",
  muted: "bg-muted/30",
  card: "bg-card",
  gradient: "bg-gradient-card"
};

export function Section({ 
  children, 
  className, 
  containerSize = "lg",
  padding = "lg",
  background = "default"
}) {
  return (
    <section className={cn(
      paddingSizes[padding],
      backgrounds[background],
      className
    )}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
}