'use client';

import { FileText } from 'lucide-react';

export default function TermsSection() {
  return (
    <section id="terms" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our QR code generator service
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                1. Acceptance of Terms
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using FastQRGen.online ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service. These Terms of Service apply to all users of the Service, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">2. Description of Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                FastQRGen provides a free online QR code generation tool that allows users to create customized QR codes for various purposes including URLs, text, phone numbers, email addresses, WhatsApp messages, WiFi credentials, and SMS messages. The Service generates QR codes client-side in your browser and does not store any user data on our servers. All QR codes are generated in real-time and downloaded directly to your device.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">3. User Responsibilities</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Users of this Service are responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Ensuring the accuracy of information encoded in QR codes</li>
                <li>Using the Service in compliance with all applicable laws and regulations</li>
                <li>Not using QR codes for illegal, harmful, or malicious purposes</li>
                <li>Not attempting to interfere with or disrupt the Service</li>
                <li>Not using the Service to distribute spam, malware, or phishing content</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">4. Intellectual Property</h3>
              <p className="text-muted-foreground leading-relaxed">
                The QR codes you generate using our Service are your property and may be used for any lawful purpose, including commercial applications. The Service itself, including its design, code, and underlying technology, remains the property of FastQRGen. You retain all rights to the content you encode in QR codes, and we claim no ownership over that content.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">5. Disclaimer of Warranties</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components. We make no guarantees about the accuracy, reliability, or completeness of the Service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">6. Limitation of Liability</h3>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall FastQRGen, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service. This limitation applies regardless of the legal theory under which damages are sought.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">7. Modifications to Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify, suspend, or discontinue the Service at any time without prior notice. We shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the Service. We may also modify these Terms of Service at any time, and continued use of the Service after such modifications constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">8. Governing Law</h3>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration or in the courts of the applicable jurisdiction.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">9. Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:legal@fastqrcodegen.online" className="text-primary hover:underline">
                  legal@fastqrcodegen.online
                </a>
              </p>
            </div>

            <div className="text-sm text-muted-foreground border-t pt-6 mt-6">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
