import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";


export function NavigationItem({ name, href, className }) {
  const pathname = usePathname();
    
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        href={href}
        className={cn(
          "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
          isActive(href)
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground",
          className
        )}
        asChild
      >
        <Link href={href}>{name}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}