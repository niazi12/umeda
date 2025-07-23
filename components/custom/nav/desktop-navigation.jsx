import {
    NavigationMenu,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu";
  import { NavigationItem } from "./navigation-item";
  import { MegaMenu } from "./mega-menu";
  import { navigationData } from "@/data";
  
  export function DesktopNavigation() {
    return (
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="space-x-2">
          {/* Main Navigation Items */}
          {navigationData.navigation
            .filter((item) => item.name !== "Contact")
            .map((item) => (
              <NavigationItem
                key={item.name}
                name={item.name}
                href={item.href}
              />
            ))}
  
          {/* Services Mega Menu */}
          {/* <MegaMenu
            label={navigation.services.label}
            icon="building"
            items={navigation.services.items}
            featured={{
              title: "Our Services",
              description: "Comprehensive IT solutions tailored to your business needs",
              href: "/services"
            }}
          /> */}
  
          {/* Resources Menu */}
          {/* <MegaMenu
            label={navigation.resources.label}
            icon="tag"
            items={navigation.resources.items}
          /> */}
        </NavigationMenuList>
      </NavigationMenu>
    );
  }