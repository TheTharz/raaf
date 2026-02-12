import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Raaf Romance - Valentine's Card Generator",
  description: "Create personalized Valentine's cards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}