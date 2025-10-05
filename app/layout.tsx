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
    url: "https://wajihtarkhani.com",
    images: "https://wajihtarkhani.com/api/og",
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
      <head>
        <link rel="me" href="https://infosec.exchange/@BigUnit" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Wajih Tarkhani",
              url: "https://wajihtarkhani.com",
              jobTitle: "Computer Science Student",
              worksFor: {
                "@type": "Organization",
                name: "Brainlab"
              },
              alumniOf: [
                {
                  "@type": "Organization",
                  name: "Technical University of Munich"
                },
                {
                  "@type": "Organization",
                  name: "University of Augsburg"
                }
              ],
              sameAs: [
                "https://infosec.exchange/@BigUnit"
              ],
              description: "Building stuff people want or I find interesting and fun to mess around with"
            })
          }}
        />
      </head>
      <body className={GeistMono.className} suppressHydrationWarning>
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
