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
      {/* Fixed main navbar only */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 border-b">
        <nav className="h-16">
          <div className="lg:container mx-auto px-4 h-full flex items-center justify-between">
            {/* Left section: Logo and Location */}
            <div className="flex items-center gap-3 flex-shrink-0 min-w-[140px]">
              <Logo />
     
            </div>

            {/* Middle section: Search */}
            <div className="hidden md:block flex-1 px-6 max-w-[650px]">
            <DesktopNavigation />
            </div>

            {/* Right section: Cart, User and Menu */}
            <div className="flex items-center justify-end gap-1 flex-shrink-0 min-w-[140px]">
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
      <div className="h-16"></div>
      

      {/* Categories section - scrolls with page in both desktop and mobile */}
      
    </>
  );
}
