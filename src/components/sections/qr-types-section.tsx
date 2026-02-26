'use client';

import { Globe, FileText, Phone, Mail, MessageCircle, Wifi, Smartphone } from 'lucide-react';

export default function QRTypesSection() {
  const qrTypes = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Website URL',
      emoji: '🌐',
      description: 'Create QR codes that link directly to any website or webpage. Perfect for marketing materials, business cards, product packaging, and digital campaigns. Users simply scan and are taken directly to your URL.',
      useCases: ['Marketing campaigns', 'Product pages', 'Landing pages', 'Social profiles'],
      example: 'https://example.com'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Plain Text',
      emoji: '📝',
      description: 'Encode any text message directly into a QR code. Useful for displaying information, quotes, instructions, or any textual content that users can read immediately after scanning.',
      useCases: ['Product information', 'Instructions', 'Quotes', 'Secret messages'],
      example: 'Hello, World!'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone Number',
      emoji: '📞',
      description: 'Generate QR codes that initiate a phone call when scanned. Great for business cards, customer support, emergency contacts, and any situation where you want to make calling effortless.',
      useCases: ['Business cards', 'Customer support', 'Emergency contacts', 'Sales hotlines'],
      example: 'tel:+1234567890'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      emoji: '📧',
      description: 'Create QR codes that open the email client with pre-filled recipient, subject, and body text. Streamlines communication by removing the need to type email addresses.',
      useCases: ['Contact forms', 'Newsletter signups', 'Support requests', 'Feedback collection'],
      example: 'mailto:support@example.com'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'WhatsApp',
      emoji: '💬',
      description: 'Generate QR codes that open WhatsApp directly to a conversation with a pre-filled message. Perfect for customer service, sales inquiries, and instant communication.',
      useCases: ['Customer service', 'Sales inquiries', 'Order support', 'Personal contacts'],
      example: 'wa.me/1234567890'
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'WiFi Network',
      emoji: '📶',
      description: 'Share WiFi credentials instantly without typing complex passwords. Great for homes, offices, cafes, hotels, and events. Supports WPA, WPA2, WPA3, and WEP encryption.',
      useCases: ['Home guests', 'Office visitors', 'Cafes & restaurants', 'Hotels & events'],
      example: 'WIFI:T:WPA;S:MyNetwork;P:password;;'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'SMS Message',
      emoji: '📱',
      description: 'Create QR codes that open the SMS app with a pre-filled phone number and message. Ideal for campaigns, voting systems, appointment reminders, and quick communication.',
      useCases: ['Marketing campaigns', 'Voting systems', 'Reminders', 'Two-factor codes'],
      example: 'sms:+1234567890?body=Hello'
    }
  ];

  return (
    <section id="qr-types" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">QR Code Types</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the different types of QR codes you can create with our generator. Each type is optimized for its specific use case.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {qrTypes.map((type, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-xl border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="text-3xl">{type.emoji}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{type.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-foreground">Common Use Cases:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {type.useCases.map((useCase, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-foreground">Example Format:</h4>
                        <code className="text-xs bg-muted px-3 py-2 rounded block overflow-x-auto">
                          {type.example}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Card */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-semibold mb-3">Choosing the Right QR Type</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Select the QR type that best matches your use case. URL QR codes are the most versatile and work for linking to any web content. WiFi QR codes are perfect for sharing network access without revealing passwords. WhatsApp and SMS QR codes enable instant communication, while email and phone QR codes make it easy for users to reach you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              All QR codes generated with our tool are static, meaning the encoded information cannot be changed after generation. For dynamic QR codes that can be updated after printing, consider using a dedicated QR management service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
