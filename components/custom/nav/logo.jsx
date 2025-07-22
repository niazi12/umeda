import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      {/* <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">N</span>
      </div> */}
      <span className="text-2xl font-bold text-primary">UMEDA</span>
    </Link>
  );
}