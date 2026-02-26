'use client';

import { QrCode, Users, Shield, Zap, Globe } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about our mission to make QR code generation accessible to everyone
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border mb-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <QrCode className="w-6 h-6 text-primary" />
              Our Story
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              FastQRGen was founded with a simple mission: to provide a free, powerful, and user-friendly QR code generator that anyone can use. We believe that QR codes are an essential tool in today's digital world, bridging the gap between physical and digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of passionate developers and designers worked tirelessly to create a tool that combines professional-grade features with an intuitive interface. Whether you're a small business owner, marketing professional, or individual user, our QR code generator provides everything you need to create stunning, functional QR codes in seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Privacy First</h4>
              <p className="text-muted-foreground">
                All QR codes are generated client-side in your browser. Your data never leaves your device, ensuring complete privacy and security.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Lightning Fast</h4>
              <p className="text-muted-foreground">
                Our optimized generation engine creates QR codes instantly. No waiting, no loading screens - just immediate results.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Free Forever</h4>
              <p className="text-muted-foreground">
                No hidden fees, no premium tiers, no registration required. Just free, unlimited QR code generation for everyone.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Global Reach</h4>
              <p className="text-muted-foreground">
                Used by millions of users worldwide across 150+ countries, supporting businesses of all sizes.
              </p>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border">
            <h3 className="text-2xl font-semibold mb-6 text-center">Our Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10M+</div>
                <div className="text-sm text-muted-foreground">QR Codes Generated</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500K+</div>
                <div className="text-sm text-muted-foreground">Monthly Users</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9★</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
