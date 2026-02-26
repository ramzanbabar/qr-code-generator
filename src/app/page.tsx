'use client';

import dynamic from 'next/dynamic';
import { Sun, Moon, QrCode, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import FAQSection from '@/components/faq-section';
import SEOContent from '@/components/seo-content';
import { useMounted } from '@/hooks/use-mounted';
import { useState } from 'react';
import Link from 'next/link';

// Dynamically import the heavy QR generator component
const QRCodeGenerator = dynamic(() => import('@/components/qr-code-generator'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-muted rounded-xl"></div>
        <div className="h-4 w-48 bg-muted rounded"></div>
        <p className="text-muted-foreground text-sm">Loading QR Generator...</p>
      </div>
    </div>
  ),
  ssr: false,
});

// WebApplication Schema for SEO
const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "FastQRGen - Free QR Code Generator",
  "description": "Create free custom QR codes instantly with our professional QR code generator. Support for URLs, text, WiFi, WhatsApp, email & more. Add logos, customize colors, download PNG/SVG.",
  "url": "https://fastqrcodegen.online",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Generate QR codes for URLs, text, phone, email, WhatsApp, WiFi, SMS",
    "Customize QR code colors and background",
    "Add custom logo to QR code",
    "Multiple pattern styles",
    "Download as PNG or SVG",
    "No registration required",
    "Client-side generation for privacy"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1523",
    "bestRating": "5",
    "worstRating": "1"
  },
  "author": {
    "@type": "Organization",
    "name": "FastQRGen"
  }
};

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a QR code and how does it work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A QR code (Quick Response code) is a two-dimensional barcode that can store various types of information, including URLs, text, contact details, WiFi credentials, and more. When scanned with a smartphone camera or QR reader app, the encoded information is instantly decoded and displayed to the user."
      }
    },
    {
      "@type": "Question",
      "name": "Is this QR code generator completely free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our QR code generator is completely free with no hidden costs or limitations. You can generate unlimited QR codes for personal or commercial use without creating an account or providing any payment information."
      }
    },
    {
      "@type": "Question",
      "name": "Can I customize the appearance of my QR code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our premium QR code generator offers extensive customization options including custom colors, six different dot pattern styles, custom corner styles, adjustable size and margin, and logo upload capability."
      }
    },
    {
      "@type": "Question",
      "name": "What file formats are available for download?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can download your QR code in two high-quality formats: PNG for web use and SVG (Scalable Vector Graphics) for printing at any size without quality loss."
      }
    },
    {
      "@type": "Question",
      "name": "Will my QR code ever expire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, the QR codes you generate with our tool never expire. Since all QR codes are generated client-side in your browser and don't rely on our servers, they will work indefinitely."
      }
    }
  ]
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FastQRGen",
  "url": "https://fastqrcodegen.online",
  "logo": "https://fastqrcodegen.online/logo.svg",
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "support@fastqrcodegen.online"
  }
};

// BreadcrumbList Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://fastqrcodegen.online"
    }
  ]
};

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-10 h-10">
        <div className="w-5 h-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-10 h-10"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </Button>
  );
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'Product' },
  { href: '/features', label: 'Features' },
  { href: '/qr-types', label: 'QR Types' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <QrCode className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">FastQRGen</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Free QR Code Generator</p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden w-10 h-10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t bg-background">
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Create Custom QR Codes Instantly
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Generate professional QR codes for URLs, WiFi, WhatsApp, emails, and more. 
                  Customize colors, add logos, and download in high resolution — all for free.
                </p>
              </div>

              {/* QR Generator Component */}
              <QRCodeGenerator />

              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  ✓ No Registration Required
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  ✓ Unlimited QR Codes
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  ✓ High Resolution Export
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  ✓ Client-Side Privacy
                </span>
              </div>
            </div>
          </section>

          {/* SEO Content Section */}
          <SEOContent />

          {/* FAQ Section */}
          <FAQSection />
        </main>

        {/* Footer */}
        <footer className="border-t bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {/* Brand */}
              <div className="col-span-2">
                <Link href="/" className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <QrCode className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-bold">FastQRGen</span>
                </Link>
                <p className="text-sm text-muted-foreground mb-4">
                  Free online QR code generator with advanced customization options. 
                  Create professional QR codes for any purpose in seconds.
                </p>
              </div>

              {/* Product Links */}
              <div>
                <h3 className="font-semibold mb-4 text-sm">Product</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/" className="hover:text-foreground transition-colors">QR Generator</Link></li>
                  <li><Link href="/product" className="hover:text-foreground transition-colors">Product</Link></li>
                  <li><Link href="/features" className="hover:text-foreground transition-colors">Features</Link></li>
                  <li><Link href="/qr-types" className="hover:text-foreground transition-colors">QR Code Types</Link></li>
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="font-semibold mb-4 text-sm">Company</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="font-semibold mb-4 text-sm">Legal</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                  <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
              <p>
                © {new Date().getFullYear()} FastQRGen. All rights reserved. All QR codes generated are free to use for any purpose.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
                <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
                <Link href="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
