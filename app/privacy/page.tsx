import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of Milan Red Line.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p className="mt-6">
        This page will be completed before the website goes live.
      </p>
    </main>
  );
}