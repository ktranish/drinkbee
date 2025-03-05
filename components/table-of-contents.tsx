"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TableOfContentsProps {
  sections: {
    id: string;
    title: string;
  }[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  return (
    <div className="sticky top-24 hidden self-start lg:block">
      <div className="w-64 rounded-lg border bg-card p-4">
        <h3 className="mb-3 font-medium">På denna sida</h3>
        <ul className="space-y-2 text-sm">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={cn(
                  "block rounded-md p-2 transition-colors",
                  activeSection === section.id
                    ? "bg-yellow font-medium text-black"
                    : "hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
