import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link 
      href="/" 
      className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
    >
      <div className="relative">
        <Image 
          src="/umeda-logo.png" 
          alt="UMEDA SB Industries" 
          width={44} 
          height={44}
          className="transition-all duration-300 group-hover:brightness-110"
        />
       
      </div>
      <div className="flex flex-col">
        
        <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent leading-tight">
          UMEDA
        </span>
        <span className="text-xs text-muted-foreground font-medium tracking-wide -mt-1">
          SB Industries
        </span>
      </div>
    </Link>
  );
}