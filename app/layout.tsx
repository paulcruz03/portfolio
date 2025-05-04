import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Left from "@/components/left";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paul Cruz",
  description: "Paul Cruz is a passionate software engineer taking full stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`mx-auto min-h-screen max-w-screen-xl lg:px-20 xl:px-40 px-4 py-12 lg:py-0 text-slate-400 ${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <Header />
        <main className="lg:grid lg:grid-cols-4 gap-8 mt-14 lg:mt-8">
          <div className="lg:col-span-1">
            <Left />
          </div>
          <div className="pt-24 lg:pt-20 lg:col-span-3">
            {children}
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
