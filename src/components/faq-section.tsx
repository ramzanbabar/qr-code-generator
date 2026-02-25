'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is a QR code and how does it work?",
    answer: "A QR code (Quick Response code) is a two-dimensional barcode that can store various types of information, including URLs, text, contact details, WiFi credentials, and more. When scanned with a smartphone camera or QR reader app, the encoded information is instantly decoded and displayed to the user. QR codes use a pattern of black and white squares arranged in a square grid, which can be read by imaging devices like cameras."
  },
  {
    question: "Is this QR code generator completely free to use?",
    answer: "Yes, our QR code generator is completely free with no hidden costs or limitations. You can generate unlimited QR codes for personal or commercial use without creating an account or providing any payment information. All QR codes are generated directly in your browser, ensuring your data remains private and secure."
  },
  {
    question: "What types of QR codes can I create with this tool?",
    answer: "Our QR code generator supports seven different content types: Website URLs for linking to webpages, plain text for displaying messages, phone numbers for initiating calls, email addresses with optional subject and body, WhatsApp messages for instant chat, WiFi credentials for easy network sharing, and SMS messages for text messaging. Each type is optimized for its specific use case."
  },
  {
    question: "Can I customize the appearance of my QR code?",
    answer: "Absolutely! Our premium QR code generator offers extensive customization options. You can change the QR code color and background color to match your brand, select from six different dot pattern styles (dots, rounded, classy, classy-rounded, square, and extra-rounded), customize corner styles, adjust the size and margin, and even add a logo image in the center for brand recognition."
  },
  {
    question: "Why should I add a logo to my QR code?",
    answer: "Adding a logo to your QR code increases brand recognition and makes your code more visually appealing and trustworthy. When users see your logo, they're more likely to trust and scan the code. Our tool automatically adjusts the error correction level to 'High' when you add a logo, ensuring the QR code remains scannable even with the logo overlay."
  },
  {
    question: "What is error correction level and which should I choose?",
    answer: "Error correction determines how much damage a QR code can sustain while remaining scannable. There are four levels: Low (7% damage tolerance), Medium (15%), Quartile (25%), and High (30%). We recommend High level when adding a logo, printing on surfaces that might get worn, or when the QR code will be displayed in challenging environments. Higher error correction results in slightly denser QR codes."
  },
  {
    question: "What file formats are available for download?",
    answer: "You can download your QR code in two high-quality formats: PNG and SVG. PNG is ideal for web use, social media, and digital displays with a fixed size. SVG (Scalable Vector Graphics) is perfect for printing at any size without quality loss, making it suitable for business cards, flyers, billboards, and other print materials. Both formats maintain crisp, clear QR codes."
  },
  {
    question: "Will my QR code ever expire?",
    answer: "No, the QR codes you generate with our tool never expire. Since all QR codes are generated client-side in your browser and don't rely on our servers, they will work indefinitely. Once downloaded, the QR code is yours forever and will continue to function as long as the encoded content (like a URL) remains valid."
  },
  {
    question: "Is my data secure when using this QR code generator?",
    answer: "Yes, your data is completely secure. All QR code generation happens directly in your browser using JavaScript – your data never leaves your device or reaches our servers. This client-side processing ensures maximum privacy for sensitive information like WiFi passwords or personal contact details. We don't store or track any QR codes you create."
  },
  {
    question: "Can I use these QR codes for commercial purposes?",
    answer: "Yes, you can use all QR codes generated with our tool for any purpose, including commercial applications, marketing campaigns, business cards, product packaging, and more. There are no licensing restrictions, watermarks, or attribution requirements. The QR codes are yours to use freely once generated."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mt-16 mb-8" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-3">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span className="font-medium pr-4">{item.question}</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-muted-foreground transition-transform flex-shrink-0",
                  openIndex === index && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                openIndex === index ? "max-h-96" : "max-h-0"
              )}
            >
              <p className="px-4 pb-4 text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
