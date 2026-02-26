'use client';

import { QrCode, CheckCircle, ArrowRight, Sparkles, Download, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProductSection() {
  return (
    <section id="product" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A professional-grade QR code generator available to everyone at no cost
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Product Card */}
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl p-8 md:p-12 border mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full text-sm font-medium text-primary mb-4">
                  <Sparkles className="w-4 h-4" />
                  Free Forever
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Professional QR Code Generator
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our QR code generator combines enterprise-level features with a simple, intuitive interface. Create customized QR codes for any purpose in seconds—no registration, no limits, no cost.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    '7 different QR code types',
                    'Custom colors and patterns',
                    'Logo upload support',
                    'PNG & SVG download formats',
                    'Client-side generation for privacy'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="gap-2">
                  <a href="#generator">
                    Start Generating
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-white rounded-2xl shadow-2xl flex items-center justify-center p-4">
                    <QrCode className="w-48 h-48 text-black" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
                    100% Free
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border text-center">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-7 h-7 text-blue-500" />
              </div>
              <h4 className="font-semibold mb-2">Instant Download</h4>
              <p className="text-sm text-muted-foreground">
                Download your QR codes immediately in PNG or SVG format. No waiting, no email verification.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border text-center">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-7 h-7 text-purple-500" />
              </div>
              <h4 className="font-semibold mb-2">Logo Integration</h4>
              <p className="text-sm text-muted-foreground">
                Add your brand logo to QR codes. Automatic error correction adjustment ensures scannability.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border text-center">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-green-500" />
              </div>
              <h4 className="font-semibold mb-2">Full Customization</h4>
              <p className="text-sm text-muted-foreground">
                Customize colors, patterns, size, and more. Create QR codes that match your brand perfectly.
              </p>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border">
            <h3 className="text-xl font-semibold mb-6 text-center">Perfect For</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: 'Marketing Teams', desc: 'Campaign tracking & brand awareness' },
                { title: 'Small Businesses', desc: 'Business cards & promotional materials' },
                { title: 'Event Organizers', desc: 'Tickets & event information' },
                { title: 'Restaurant Owners', desc: 'Digital menus & ordering' },
                { title: 'Real Estate Agents', desc: 'Property listings & virtual tours' },
                { title: 'Educators', desc: 'Learning resources & materials' },
                { title: 'Healthcare', desc: 'Patient forms & information' },
                { title: 'Personal Use', desc: 'WiFi sharing & contact info' }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
