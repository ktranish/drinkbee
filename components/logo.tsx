import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="logo-animation">
        <span className="text-4xl">🐝</span>
      </div>
      <span className="text-2xl font-bold text-yellow">DrinkBee</span>
    </Link>
  );
}
