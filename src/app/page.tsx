'use client';

import dynamic from 'next/dynamic';
import { Sun, Moon, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import FAQSection from '@/components/faq-section';
import SEOContent from '@/components/seo-content';
import { useMounted } from '@/hooks/use-mounted';

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
  "name": "Free QR Code Generator",
  "description": "Create free custom QR codes instantly with our professional QR code generator. Support for URLs, text, WiFi, WhatsApp, email & more. Add logos, customize colors, download PNG/SVG.",
  "url": "https://qrcode-generator.com",
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
    "name": "QR Code Generator"
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

export default function Home() {
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

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <QrCode className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">QR Code Generator</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Free & Customizable</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
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
        <footer className="border-t bg-muted/30 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <QrCode className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-bold">QR Code Generator</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Free online QR code generator with advanced customization options. 
                  Create professional QR codes for any purpose in seconds.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold mb-4">QR Code Types</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>🌐 Website URL QR Codes</li>
                  <li>📶 WiFi Network QR Codes</li>
                  <li>💬 WhatsApp Message QR Codes</li>
                  <li>📧 Email QR Codes</li>
                  <li>📞 Phone Number QR Codes</li>
                  <li>📱 SMS Message QR Codes</li>
                </ul>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-semibold mb-4">Features</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Custom Colors & Patterns</li>
                  <li>✓ Logo Upload Support</li>
                  <li>✓ PNG & SVG Downloads</li>
                  <li>✓ Multiple Pattern Styles</li>
                  <li>✓ Real-time Preview</li>
                  <li>✓ 100% Free Forever</li>
                </ul>
              </div>
            </div>

            <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>
                © {new Date().getFullYear()} Free QR Code Generator. All QR codes generated are free to use for any purpose.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
