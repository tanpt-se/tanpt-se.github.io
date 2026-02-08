import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tan Pham | Senior Software Engineer",
  description: "Senior Software Engineer specialized in building exceptional digital experiences.",
  openGraph: {
    title: "Tan Pham | Senior Software Engineer",
    description: "Senior Software Engineer specialized in building exceptional digital experiences.",
    url: "https://tanpt-se.github.io",
    siteName: "Tan PT Portfolio",
    locale: "en_US",
    type: "website",
  },
};

import QueryProvider from "@/providers/query-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${outfit.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30 Transition-colors duration-300`}
      >
        <QueryProvider>
          <div className="relative min-h-screen">
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] pointer-events-none -z-10" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />

            <main>{children}</main>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
