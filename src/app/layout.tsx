import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fastqrcodegen.online'),
  title: {
    default: "Free QR Code Generator Online (Logo, SVG, WiFi, URL, WhatsApp) | FastQRGen",
    template: "%s | FastQRGen"
  },
  description: "Create free custom QR codes instantly with our professional QR code generator. Support for URLs, text, WiFi, WhatsApp, email & more. Add logos, customize colors, download PNG/SVG. No signup required.",
  keywords: [
    "QR code generator",
    "free QR code",
    "custom QR code",
    "QR code maker",
    "QR code with logo",
    "WiFi QR code",
    "URL QR code",
    "WhatsApp QR code",
    "QR code download",
    "SVG QR code",
    "PNG QR code",
    "online QR generator",
    "business QR code",
    "QR code creator",
    "fast QR generator",
    "QR code online",
    "free QR generator",
  ],
  authors: [{ name: "FastQRGen" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Free QR Code Generator Online (Logo, SVG, WiFi, URL, WhatsApp) | FastQRGen",
    description: "Create free custom QR codes instantly. Add logos, customize colors, download PNG/SVG. Support for URLs, WiFi, WhatsApp & more.",
    url: "https://fastqrcodegen.online",
    siteName: "FastQRGen - Free QR Code Generator",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FastQRGen - Free QR Code Generator Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free QR Code Generator Online (Logo, SVG, WiFi, URL, WhatsApp) | FastQRGen",
    description: "Create free custom QR codes instantly. Add logos, customize colors, download PNG/SVG.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <link rel="canonical" href="https://fastqrcodegen.online" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
