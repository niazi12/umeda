import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/umeda-logo.png" alt="UMEDA SB Industries" width={40} height={40} />
      <span className="text-2xl font-bold text-gray-800">UMEDA</span>
    </Link>
  );
}