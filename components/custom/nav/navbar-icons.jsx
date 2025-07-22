"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icon } from "../ui/icon";
// import { ModeToggle } from "../ui/mode-toggle";

export function NavbarIcons({
  className
}) {
  return (
    <div className={cn("flex items-center gap-3 md:gap-4", className)}>
      {/* <ModeToggle /> */}
      <Button variant="ghost" size="sm" asChild>
        <Link href="/contact">
          <Icon name="phone" className="mr-2" size={16} />
          Contact
        </Link>
      </Button>
    </div>
  );
}
