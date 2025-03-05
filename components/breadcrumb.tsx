import { cn } from "@/lib/utils";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center text-sm text-gray-500 dark:text-gray-400",
        className,
      )}
    >
      <ol className="flex flex-wrap items-center">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center transition-colors hover:text-yellow"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
          </Link>
          <ChevronRight className="mx-2 h-4 w-4 flex-shrink-0" />
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center">
              {isLast ? (
                <span
                  className="font-medium text-black dark:text-white"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href || "#"}
                    className="transition-colors hover:text-yellow"
                  >
                    {item.label}
                  </Link>
                  <ChevronRight className="mx-2 h-4 w-4 flex-shrink-0" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
