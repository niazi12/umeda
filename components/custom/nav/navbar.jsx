"use client";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { NavbarIcons } from "./navbar-icons";
import { useIsMobile } from "@/hooks/use-mobile";
import  { DesktopNavigation } from "./desktop-navigation";


export function Navbar({ user, token, isSeller, isAdmin }) {
  const isMobile = useIsMobile();

  // Simplified version for mobile with pixel art styling
  function MobileNavbarIcons({ user, cartCount = 0, isSeller, isAdmin }) {
    return (
      <div className="flex items-center">

        {isMobile && (
          <MobileNav
            user={user}
            cartCount={0}
            isSeller={isSeller}
            isAdmin={isAdmin}
          />
        )}
      </div>
    );
  }

  return (
    <>
      {/* Fixed main navbar with glassmorphism effect */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-border/40"></div>
        <nav className="relative h-20">
          <div className="lg:container mx-auto px-6 h-full flex items-center justify-between">
            {/* Left section: Logo */}
            <div className="flex items-center gap-3 flex-shrink-0 min-w-[160px]">
              <Logo />
            </div>

            {/* Middle section: Navigation */}
            <div className="hidden md:block flex-1 px-8 max-w-[700px]">
              <DesktopNavigation />
            </div>

            {/* Right section: Contact and Menu */}
            <div className="flex items-center justify-end gap-2 flex-shrink-0 min-w-[160px]">
              {isMobile ? (
                <MobileNavbarIcons
                  user={user}
                  cartCount={0}
                  isSeller={isSeller}
                  isAdmin={isAdmin}
                />
              ) : (
                <>
                  <NavbarIcons
                    user={user}
                    cartCount={0}
                    isLoading={false}
                    isSeller={isSeller}
                    isAdmin={isAdmin}
                  />
                  
                </>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer to account for fixed navbar */}
      <div className="h-20"></div>
      

      {/* Categories section - scrolls with page in both desktop and mobile */}
      
    </>
  );
}
