import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/context/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drinkbee.se"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    url: "./",
    images: [
      {
        url: "/mockup.png", // Image in the public folder
        width: 1200, // Recommended width for Open Graph images
        height: 630, // Recommended height for Open Graph images
        alt: "Två telefoner som visar drinkbee - drickspel och dricklekar", // Alt text for the image
      },
    ],
    siteName: "Drinkbee", // Optional, helps with branding on social shares
  },
  twitter: {
    card: "summary_large_image", // Use a large summary image
    images: [
      {
        url: "/mockup.png", // Image in the public folder
        width: 1200, // Same image can be used for Twitter, keeping width and height
        height: 630,
        alt: "Två telefoner som visar drinkbee - drickspel och dricklekar", // Alt text for the image
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager - Loaded after interactive */}
        <Script
          id="google-tag-manager"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NFBSXMSF');
            `,
          }}
        />
      </head>
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
