import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Milan Red Line",
  description:
    "Privacy policy for Milan Red Line apartments.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-zinc-900">
          Privacy Policy
        </h1>

        <p className="mt-6 text-zinc-600 leading-8">
          Last updated: July 2026
        </p>

        <section className="mt-10 space-y-8 text-zinc-700 leading-8">
          <div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Introduction
            </h2>

            <p className="mt-3">
              Milan Red Line respects your privacy and is committed to
              protecting your personal information. This privacy policy
              explains how we collect, use and protect your data when you
              visit our website or contact us regarding our apartments.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Information we collect
            </h2>

            <p className="mt-3">
              We may collect personal information that you voluntarily provide,
              such as your name, email address or phone number when you contact
              us about availability or reservations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-900">
              How we use your information
            </h2>

            <p className="mt-3">
              Your information is used only to respond to enquiries, provide
              assistance and manage requests related to our apartments.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Data sharing
            </h2>

            <p className="mt-3">
              We do not sell, rent or share your personal information with
              third parties, except where necessary to provide requested
              services or where required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Cookies and third-party services
            </h2>

            <p className="mt-3">
              This website may use essential technical services required for
              its operation. Additional services such as analytics or booking
              platforms will be disclosed and updated in this policy when
              introduced.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Contact
            </h2>

            <p className="mt-3">
              For any questions regarding this privacy policy, please contact:
            </p>

            <p className="mt-2">
              info@milanredline.it
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}