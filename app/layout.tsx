import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/context/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drinkbee - Party Games",
  description: "Fun party games for everyone",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "flex min-h-screen flex-col")}>
        <ThemeProvider
          attribute="class"
          disableTransitionOnChange
          enableSystem={false}
          defaultTheme="light"
        >
          <div className="flex flex-grow flex-col">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
