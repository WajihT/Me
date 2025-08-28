import {
  Inter,
  Space_Grotesk,
  Roboto_Mono,
  JetBrains_Mono,
  Work_Sans,
  Source_Code_Pro,
  Inconsolata,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font";


const inter = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700", "300", "500", "600"],
});

export const metadata: Metadata = {
  title: "Wajih Tarkhani",
  description: "Building stuff people want or I find interesting and fun to mess around with",
  icons: {
    icon: "/favi.png",
    shortcut: "/favi.png",
  },
  openGraph: {
    title: "Wajih Tarkhani",
    description: "Building stuff people want or I find interesting and fun to mess around with",
    url: "https://wajih.info",
    images: "https://wajih.info/api/og",
    siteName: "Wajih Tarkhani",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wajih Tarkhani",
    description: "Building stuff people want or I find interesting and fun to mess around with",
    site: "@Wajih9",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className={`flex flex-col p-5`}>
            <div className="flex justify-center items-center mb-14">
              <Header />
            </div>
            <div className="flex justify-center items-center">{children}</div>
            <div className="mt-10">
              <Footer />
            </div>
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
