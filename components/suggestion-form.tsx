"use client";

import type React from "react";

import { sendDiscordNotification } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Lightbulb, SendHorizontal } from "lucide-react";
import { useReCaptcha } from "next-recaptcha-v3";
import { useState } from "react";

export function SuggestionForm() {
  const [suggestion, setSuggestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { executeRecaptcha } = useReCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = await executeRecaptcha("form_submit");

    const recaptchaResponse = await fetch("/api/verify-recaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaResponse.ok || !recaptchaData.success) {
      alert("reCAPTCHA verification failed. Please try again.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await sendDiscordNotification(
      "✅ User has sent in a suggestion",
      { suggestion },
      "🎉",
    );

    // Show success message
    setShowSuccess(true);
    setSuggestion("");
    setIsSubmitting(false);

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6 text-center">
      <div className="mb-8 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-1 animate-pulse rounded-full bg-yellow opacity-75 blur-sm"></div>
          <div className="relative rounded-full border-2 border-yellow bg-black p-3 dark:bg-black">
            <Lightbulb className="h-6 w-6 text-yellow" />
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold md:text-3xl">
        Har du en idé du vill dela med dig av?
      </h3>

      <p className="mx-auto max-w-lg text-gray-600 dark:text-gray-400">
        Vi är alltid öppna för nya idéer! Oavsett om det är ett nytt spel eller
        fler frågor till ett befintligt spel.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          placeholder="Skriv din idé här..."
          className="min-h-[120px] border-2 border-yellow/50 bg-white transition-colors focus:border-yellow dark:bg-black"
          required
        />

        <div className="relative inline-block">
          <Button
            type="submit"
            variant="game"
            className={cn(
              "group px-8 py-6 text-lg transition-all duration-300",
              isSubmitting && "cursor-not-allowed opacity-50",
            )}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Skickar..."
            ) : (
              <>
                Skicka förslag
                <SendHorizontal className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>

          {/* Success message */}
          <div
            className={cn(
              "absolute left-1/2 top-0 w-full -translate-x-1/2 transform transition-all duration-300",
              showSuccess
                ? "translate-y-16 opacity-100"
                : "pointer-events-none translate-y-8 opacity-0",
            )}
          >
            <span className="rounded-full bg-green-500 px-6 py-2 text-sm font-medium text-white">
              Tack för ditt förslag! 🎉
            </span>
          </div>
        </div>
      </form>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        Vi uppskattar alla förslag men kan inte lova att vi använder alla.
        Varför inte gå det ett försök?
      </p>
    </div>
  );
}
