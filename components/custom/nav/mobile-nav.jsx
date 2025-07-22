// components/navbar/mobile-nav.jsx
"use client";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationData } from "@/data";

export function MobileNav({
    className,
}) {
    const pathname = usePathname();

    // Admin/Seller nav items (keeping these for potential future use)
    const roleNavItems = [];

    // Main navigation items from data
    const navItems = [...navigationData.navigation];

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn("h-9 w-9", className)}
                    aria-label="Menu"
                >
                    <Menu className="h-[18px] w-[18px]" />
                </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                    Main navigation links
                </SheetDescription>

                <div className="flex h-full flex-col">
                    <SheetHeader className="px-4 pt-4 pb-2 border-b">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold">
                                Umeda Menu
                            </span>
                        </div>
                    </SheetHeader>

                    <div className="flex-1 overflow-y-auto py-4">
                        {/* Main Navigation */}
                        <nav className="flex flex-col gap-1 px-4">
                            {navItems.map((item) => {
                                const isActive =
                                    pathname === item.href ||
                                    (item.href !== "/" &&
                                        pathname.startsWith(item.href));

                                return (
                                    <SheetClose key={item.href} asChild>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "flex items-center px-4 py-2 text-sm rounded-md transition-colors",
                                                isActive
                                                    ? "bg-gray-100 text-primary font-medium"
                                                    : "hover:bg-gray-50"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    </SheetClose>
                                );
                            })}
                        </nav>

                        {/* Role-specific Navigation */}
                        {roleNavItems.length > 0 && (
                            <div className="mt-6 border-t pt-4 px-4">
                                <div className="mb-2">
                                    <span className="text-sm text-muted-foreground">
                                        Admin Area
                                    </span>
                                </div>
                                <nav className="flex flex-col gap-1">
                                    {roleNavItems.map((item) => {
                                        const isActive =
                                            pathname === item.href ||
                                            (item.href !== "/" &&
                                                pathname.startsWith(item.href));

                                        return (
                                            <SheetClose key={item.href} asChild>
                                                <Link
                                                    href={item.href}
                                                    className={cn(
                                                        "flex items-center px-4 py-2 text-sm rounded-md transition-colors",
                                                        isActive
                                                            ? "bg-primary/10 text-primary font-medium"
                                                            : "hover:bg-gray-50"
                                                    )}
                                                >
                                                    {item.name}
                                                </Link>
                                            </SheetClose>
                                        );
                                    })}
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
