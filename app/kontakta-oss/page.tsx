"use client";

import type React from "react";

import { Breadcrumb } from "@/components/breadcrumb";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CheckCircle, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Show success message
    setShowSuccess(true);
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);

    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  // FAQ items
  const faqItems = [
    {
      question: "Hur kontaktar jag Drinkbee för support?",
      answer:
        "Du kan kontakta oss genom att fylla i kontaktformuläret på denna sida, eller skicka ett e-postmeddelande direkt till support@drinkbee.se.",
    },
    {
      question: "Vad är svarstiden för förfrågningar?",
      answer:
        "Vi strävar efter att svara på alla förfrågningar inom 24-48 timmar under vardagar.",
    },
    {
      question: "Kan jag föreslå nya spel eller funktioner?",
      answer:
        "Absolut! Vi välkomnar förslag på nya spel eller funktioner. Använd kontaktformuläret och välj 'Förslag' som ämne.",
    },
    {
      question: "Hur rapporterar jag ett problem med webbplatsen?",
      answer:
        "Om du stöter på problem med webbplatsen, vänligen beskriv problemet i detalj i kontaktformuläret, inklusive vilken enhet och webbläsare du använder.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-white dark:bg-black">
      <Header />

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb items={[{ label: "Kontakta oss" }]} className="mb-8" />

        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-black dark:text-white md:text-5xl">
            Kontakta oss
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Har du frågor, förslag eller feedback? Vi skulle älska att höra från
            dig!
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-800 dark:bg-gray-900 md:p-8">
            <div className="mb-6 flex items-center">
              <h2 className="text-2xl font-bold">Skicka ett meddelande</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Namn</Label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Ditt namn"
                  required
                  className="border-2 border-gray-200 bg-white focus:border-yellow dark:border-gray-800 dark:bg-black"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-post</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="din.email@exempel.se"
                  required
                  className="border-2 border-gray-200 bg-white focus:border-yellow dark:border-gray-800 dark:bg-black"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Ämne</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Vad handlar ditt meddelande om?"
                  required
                  className="border-2 border-gray-200 bg-white focus:border-yellow dark:border-gray-800 dark:bg-black"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Meddelande</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Skriv ditt meddelande här..."
                  required
                  className="min-h-[150px] border-2 border-gray-200 bg-white focus:border-yellow dark:border-gray-800 dark:bg-black"
                />
              </div>

              <div className="relative">
                <Button
                  type="submit"
                  variant="game"
                  className={cn(
                    "group w-full py-6 text-lg transition-all duration-300",
                    isSubmitting && "cursor-not-allowed opacity-50",
                  )}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Skickar..."
                  ) : (
                    <>
                      Skicka meddelande
                      <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>

                {/* Success message */}
                <div
                  className={cn(
                    "absolute left-1/2 top-0 -translate-x-1/2 transform transition-all duration-300",
                    showSuccess
                      ? "translate-y-16 opacity-100"
                      : "pointer-events-none translate-y-8 opacity-0",
                  )}
                >
                  <span className="flex items-center rounded-full bg-green-500 px-4 py-2 text-sm font-medium text-white">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Tack för ditt meddelande! Vi återkommer snart.
                  </span>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Info and FAQ */}
          <div className="space-y-8">
            {/* FAQ */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-800 dark:bg-gray-900 md:p-8">
              <h2 className="mb-6 text-2xl font-bold">Vanliga frågor</h2>

              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-4 last:border-0 last:pb-0 dark:border-gray-800"
                  >
                    <h3 className="mb-2 text-lg font-medium">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
