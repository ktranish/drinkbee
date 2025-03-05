import { Header } from "@/components/header";
import { RulesSidebar } from "@/components/rules-sidebar";
import type React from "react";

export default function RulesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex flex-1 flex-col md:flex-row">
        <RulesSidebar />
        <main className="mx-auto w-full max-w-4xl flex-1 p-6 md:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
