"use client";

import { useEffect, useState } from "react";

export function A11yChecker() {
  const [issues, setIssues] = useState<string[]>([]);

  useEffect(() => {
    // Simple contrast checker for development purposes
    const checkContrast = () => {
      const textElements = document.querySelectorAll(
        "p, h1, h2, h3, h4, h5, h6, span, a, button",
      );
      const newIssues: string[] = [];

      textElements.forEach((el) => {
        const styles = window.getComputedStyle(el);
        const bgColor = styles.backgroundColor;
        const color = styles.color;

        // This is a simplified check - in production you'd use a proper contrast calculation
        if (color === "rgb(255, 230, 0)" && bgColor === "rgb(0, 0, 0)") {
          newIssues.push(
            `Low contrast detected: ${el.textContent?.substring(0, 20)}...`,
          );
        }
      });

      if (newIssues.length > 0) {
        setIssues(newIssues);
      }
    };

    // Only run in development
    if (process.env.NODE_ENV === "development") {
      setTimeout(checkContrast, 1000); // Give time for the page to render
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  // Only show in development and if there are issues
  if (process.env.NODE_ENV !== "development" || issues.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-xs rounded-lg bg-red-600 p-4 text-white shadow-lg">
      <h3 className="mb-2 font-bold">Accessibility Issues:</h3>
      <ul className="list-disc pl-5">
        {issues.map((issue, i) => (
          <li key={i}>{issue}</li>
        ))}
      </ul>
    </div>
  );
}
