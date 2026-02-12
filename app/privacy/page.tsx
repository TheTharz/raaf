import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-pink-600 hover:underline dark:text-pink-400"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="mb-6 text-4xl font-bold text-pink-600 dark:text-pink-400">
        Privacy Policy
      </h1>

      <div className="prose prose-pink dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold">How Your Data Works</h2>
          <p>
            Raaf Romance is a privacy-first Valentine&apos;s card generator. We believe
            in transparency, so here&apos;s exactly how your data is handled:
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">No Database, No Backend</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All card data is encoded directly into the URL using Base64</li>
            <li>We do not store any card data on servers or databases</li>
            <li>Cards exist only in the links you create and share</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">What This Means</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Privacy:</strong> Your messages are not stored or accessible to us</li>
            <li><strong>Security Risk:</strong> Anyone with the link can read the message</li>
            <li><strong>Browser History:</strong> Card links appear in your browser history</li>
            <li><strong>Analytics:</strong> If deployed with analytics, URLs may be logged</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">No Cookies or Tracking</h2>
          <p>This application runs entirely in your browser. We do not use cookies, local storage, third-party tracking, or user accounts.</p>
        </section>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          Last updated: February 12, 2026
        </p>
      </div>
    </main>
  );
}