'use client';

import { 
  Palette, 
  ImageIcon, 
  Download, 
  Shield, 
  Zap, 
  Globe, 
  Smartphone, 
  QrCode,
  Settings,
  Layers,
  CheckCircle,
  Infinity
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Custom Colors',
      description: 'Personalize your QR codes with any color combination. Match your brand identity or create eye-catching designs with custom foreground and background colors.'
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: 'Logo Support',
      description: 'Add your company logo or any image to the center of your QR code. Perfect for brand recognition and professional marketing materials.'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Multiple Patterns',
      description: 'Choose from 6 different dot patterns including dots, rounded, classy, classy-rounded, square, and extra-rounded styles for unique QR designs.'
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: 'PNG & SVG Export',
      description: 'Download your QR codes in high-quality PNG for digital use or SVG format for printing at any size without quality loss.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Error Correction',
      description: '4 levels of error correction (L, M, Q, H) allow QR codes to remain scannable even when partially damaged or when adding logos.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Instant Generation',
      description: 'QR codes are generated instantly in your browser. No waiting, no server delays - see your changes in real-time.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: '7 Content Types',
      description: 'Generate QR codes for URLs, text, phone numbers, emails, WhatsApp messages, WiFi credentials, and SMS messages.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Friendly',
      description: 'Fully responsive design works perfectly on all devices. Generate QR codes on desktop, tablet, or mobile with the same experience.'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Size & Margin Control',
      description: 'Adjust QR code size from 150px to 600px and customize margins for perfect integration into any design or material.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'No Registration',
      description: 'Start generating QR codes immediately without creating an account. No email required, no verification needed.'
    },
    {
      icon: <Infinity className="w-6 h-6" />,
      title: 'Unlimited Use',
      description: 'Generate as many QR codes as you need with no limits. Use them for personal or commercial purposes without restrictions.'
    },
    {
      icon: <QrCode className="w-6 h-6" />,
      title: 'Permanent QR Codes',
      description: 'Generated QR codes never expire. Once downloaded, they work indefinitely as long as the encoded content remains valid.'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover all the powerful features that make our QR code generator the best choice for professionals and individuals alike
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-primary">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">Why Choose Our Generator?</h3>
          <div className="bg-card/50 backdrop-blur-sm rounded-xl border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">FastQRGen</th>
                  <th className="text-center p-4 font-semibold">Others</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-4">Free to Use</td>
                  <td className="p-4 text-center text-green-600">✓ Always Free</td>
                  <td className="p-4 text-center text-muted-foreground">Often Limited</td>
                </tr>
                <tr className="border-b bg-muted/20">
                  <td className="p-4">Logo Upload</td>
                  <td className="p-4 text-center text-green-600">✓ Free</td>
                  <td className="p-4 text-center text-muted-foreground">Usually Paid</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">SVG Download</td>
                  <td className="p-4 text-center text-green-600">✓ Free</td>
                  <td className="p-4 text-center text-muted-foreground">Often Paid</td>
                </tr>
                <tr className="border-b bg-muted/20">
                  <td className="p-4">Pattern Styles</td>
                  <td className="p-4 text-center text-green-600">✓ 6 Styles</td>
                  <td className="p-4 text-center text-muted-foreground">2-3 Styles</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Registration Required</td>
                  <td className="p-4 text-center text-green-600">✓ No</td>
                  <td className="p-4 text-center text-muted-foreground">Often Yes</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-4">Privacy (Client-Side)</td>
                  <td className="p-4 text-center text-green-600">✓ Full Privacy</td>
                  <td className="p-4 text-center text-muted-foreground">Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
