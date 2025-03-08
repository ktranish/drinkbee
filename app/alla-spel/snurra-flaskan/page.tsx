"use client";

import { Breadcrumb } from "@/components/breadcrumb";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function SpinTheBottlePage() {
  // State for UI updates
  const [displayRotation, setDisplayRotation] = useState(0);
  const [spinStatus, setSpinStatus] = useState("idle"); // "idle", "spinning", "slowing"

  // Refs for animation values (don't need to trigger re-renders)
  const rotationRef = useRef(0);
  const speedRef = useRef(0);
  const lastTimeRef = useRef(0);
  const requestRef = useRef<number | undefined>(undefined);
  const clickCountRef = useRef(0);
  const lastClickTimeRef = useRef(0);

  // Function to handle bottle click
  const handleBottleClick = () => {
    const now = performance.now();

    // Check if this is a rapid click (within 500ms of the last click)
    if (now - lastClickTimeRef.current < 500) {
      clickCountRef.current += 1;
      // Exponential speed increase for consecutive clicks, but capped to prevent excessive spin times
      const boost = Math.min(20 + clickCountRef.current * 15, 150);
      speedRef.current += boost;
    } else {
      // Reset click counter for new click sequence
      clickCountRef.current = 0;
      // Base speed boost
      speedRef.current += 100;
    }

    lastClickTimeRef.current = now;

    // Cap the maximum speed
    if (speedRef.current > 600) {
      speedRef.current = 600;
    }

    // Update spinning state
    setSpinStatus("spinning");

    // Start animation if it's not already running
    if (!requestRef.current) {
      lastTimeRef.current = performance.now();
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  // Animation function
  const animate = useCallback(
    (timestamp: number) => {
      // Calculate time delta in seconds (for more consistent animation)
      const deltaSeconds = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      // Update rotation based on current speed (degrees per second)
      rotationRef.current += speedRef.current * deltaSeconds;

      // Keep rotation positive and update display rotation
      setDisplayRotation(rotationRef.current);

      // Apply friction to gradually slow down the bottle
      if (speedRef.current > 0) {
        // Proportional deceleration - higher speeds slow down faster
        // This ensures the bottle stops in roughly the same time regardless of speed
        const decelerationRate = 0.15; // 15% of current speed per second
        const minimumDeceleration = 40; // Minimum deceleration to ensure it stops in a reasonable time

        // Calculate deceleration as a percentage of current speed, but with a minimum value
        const deceleration = Math.max(
          speedRef.current * decelerationRate * deltaSeconds,
          minimumDeceleration * deltaSeconds,
        );

        // Update speed
        speedRef.current = Math.max(0, speedRef.current - deceleration);

        // Update status when slowing down
        if (speedRef.current < 80 && spinStatus !== "slowing") {
          setSpinStatus("slowing");
        }

        // Check if bottle has effectively stopped
        if (speedRef.current < 1) {
          speedRef.current = 0;
          setSpinStatus("idle");
        }
      }

      // Continue animation if still moving
      if (speedRef.current > 0) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        requestRef.current = undefined;
      }
    },
    [spinStatus],
  );

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-white dark:bg-black">
      <Header />

      <section className="container mx-auto flex max-w-6xl flex-grow flex-col items-center px-4 py-12">
        <Breadcrumb
          items={[
            { label: "Spel", href: "/alla-spel" },
            { label: "Snurra flaskan" },
          ]}
          className="mb-8 self-start"
        />

        <h1 className="mb-8 animate-fade-in text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
          Snurra flaskan
        </h1>

        <div className="mb-8 flex justify-center">
          <Link href={`/rules/snurra-flaskan`}>
            <Button variant="outline" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Visa spelregler</span>
            </Button>
          </Link>
        </div>

        <div className="emoji-pulse mb-8 text-6xl">🍾</div>

        <div className="relative mb-16 flex aspect-square w-full max-w-md items-center justify-center">
          {/* Circular background with subtle pattern */}
          <div className="absolute h-4/5 w-4/5 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
            {/* Optional: Add subtle pattern or texture */}
            <div className="absolute inset-0 bg-white bg-[radial-gradient(circle,_transparent_20%,_#000_20%,_#000_80%,_transparent_80%,_transparent),_radial-gradient(circle,_transparent_20%,_#000_20%,_#000_80%,_transparent_80%,_transparent)_25px_25px,_radial-gradient(circle,_#000_10%,_transparent_10%)_50px_50px] bg-[length:50px_50px] opacity-10 dark:bg-black"></div>
          </div>

          {/* Direction indicator (optional) */}
          <div className="absolute top-[10%] h-8 w-1 rounded-full bg-yellow"></div>

          {/* Bottle */}
          <div
            className="relative cursor-pointer transition-transform hover:scale-105"
            onClick={handleBottleClick}
            style={{
              transform: `rotate(${displayRotation}deg)`,
              transformOrigin: "center center",
              willChange: "transform",
            }}
          >
            <svg
              width="100"
              height="300"
              viewBox="0 0 100 300"
              className="drop-shadow-xl"
            >
              {/* Bottle neck */}
              <rect
                x="42"
                y="20"
                width="16"
                height="80"
                rx="8"
                fill="#8B4513"
              />

              {/* Bottle body */}
              <ellipse cx="50" cy="100" rx="20" ry="10" fill="#8B4513" />
              <rect x="30" y="100" width="40" height="150" fill="#8B4513" />
              <ellipse cx="50" cy="250" rx="20" ry="10" fill="#8B4513" />

              {/* Bottle highlight */}
              <rect
                x="45"
                y="20"
                width="5"
                height="230"
                fill="#D2B48C"
                fillOpacity="0.3"
              />

              {/* Bottle cap */}
              <rect
                x="40"
                y="10"
                width="20"
                height="10"
                rx="2"
                fill="#D2B48C"
              />

              {/* Label */}
              <rect
                x="35"
                y="130"
                width="30"
                height="60"
                rx="2"
                fill="#F5F5DC"
              />
              <line
                x1="40"
                y1="145"
                x2="60"
                y2="145"
                stroke="#333"
                strokeWidth="1"
              />
              <line
                x1="40"
                y1="155"
                x2="60"
                y2="155"
                stroke="#333"
                strokeWidth="1"
              />
              <line
                x1="40"
                y1="165"
                x2="60"
                y2="165"
                stroke="#333"
                strokeWidth="1"
              />
              <line
                x1="40"
                y1="175"
                x2="60"
                y2="175"
                stroke="#333"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>

        <div className="mb-8 text-center">
          <h2 className="mb-4 text-2xl font-medium">
            {spinStatus === "spinning"
              ? "Flaskan snurrar..."
              : spinStatus === "slowing"
                ? "Flaskan saktar ner..."
                : "Klicka på flaskan för att snurra!"}
          </h2>
          <p className="mx-auto max-w-md text-gray-600 dark:text-gray-400">
            {spinStatus !== "idle"
              ? "Klicka igen för att öka hastigheten!"
              : "Den som flaskan pekar på när den stannar måste svara på en fråga eller utföra en utmaning."}
          </p>
        </div>

        <div className="mx-auto max-w-md text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Tips: Klicka flera gånger snabbt för att öka hastigheten!</p>
        </div>
      </section>
    </main>
  );
}
