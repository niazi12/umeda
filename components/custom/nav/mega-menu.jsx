import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Icon } from "@/components/custom/ui/icon";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";



const getIconForHref = (href) => {
  if (href === "/solutions") return "zap";
  if (href === "/industries") return "building";
  if (href.includes("blog")) return "tag";
  return "code";
};

export function MegaMenu({ label, icon, items, featured, className }) {
  const pathname = usePathname();
  
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isAnyItemActive = items.some(item => isActive(item.href));

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger 
        className={cn(
          "h-9 px-4 py-2",
          isAnyItemActive && "bg-accent text-accent-foreground",
          className
        )}
      >
        <Icon name={icon} className="mr-2" size={16} />
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className={cn(
          "p-6",
          featured ? "grid w-[600px] gap-3 lg:grid-cols-2" : "w-[400px]"
        )}>
          {featured && (
            <div className="row-span-3">
              <NavigationMenuLink asChild>
                <Link
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:shadow-md transition-shadow"
                  href={featured.href}
                >
                  <Icon name="zap" className="h-6 w-6" />
                  <div className="mb-2 mt-4 text-lg font-medium">
                    {featured.title}
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    {featured.description}
                  </p>
                </Link>
              </NavigationMenuLink>
            </div>
          )}
          <div className={cn("space-y-1", !featured && "w-full")}>
            {items.map((item) => (
              <NavigationMenuLink key={item.name} asChild>
                <Link
                  href={item.href}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="flex items-center space-x-2">
                    <Icon name={getIconForHref(item.href)} size={16} />
                    <div className="text-sm font-medium leading-none">{item.name}</div>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              </NavigationMenuLink>
            ))}
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}