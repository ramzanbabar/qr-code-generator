'use client';

import { AlertTriangle } from 'lucide-react';

export default function DisclaimerSection() {
  return (
    <section id="disclaimer" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Disclaimer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Important information about using our QR code generator service
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Important Notice</h3>
                <p className="text-muted-foreground">
                  By using FastQRGen's QR code generator, you acknowledge that you have read, understood, and agree to be bound by the following disclaimers and limitations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  1. General Disclaimer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The information and services provided by FastQRGen are for general informational and utility purposes only. While we strive to provide accurate and up-to-date functionality, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the service or the information contained on the website. Any reliance you place on such information is strictly at your own risk.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. QR Code Functionality</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  While we use industry-standard technology to generate QR codes, we cannot guarantee that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Generated QR codes will be scannable by all devices and applications</li>
                  <li>QR codes will remain functional indefinitely</li>
                  <li>All QR code readers will interpret the encoded data correctly</li>
                  <li>The appearance of QR codes will be consistent across all platforms</li>
                  <li>Custom colors or logos will not affect scan reliability</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  We recommend testing your QR codes with multiple devices and applications before widespread distribution. For critical applications, consider using higher error correction levels and simpler designs to maximize scanability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. User Content Responsibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users are solely responsible for the content they encode in QR codes. FastQRGen does not verify, monitor, or endorse any content encoded by users. You agree not to encode or distribute QR codes containing:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-3">
                  <li>Illegal, harmful, or malicious content</li>
                  <li>Phishing links or malware distribution points</li>
                  <li>Content that infringes on intellectual property rights</li>
                  <li>Defamatory, obscene, or offensive material</li>
                  <li>Content that violates applicable laws or regulations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4. Third-Party Links</h3>
                <p className="text-muted-foreground leading-relaxed">
                  QR codes generated through our service may contain links to third-party websites or resources. We have no control over the contents of those sites or resources and accept no responsibility for them or for any loss or damage that may arise from your use of them. Users should exercise caution and review the privacy policies and terms of any linked websites.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">5. No Professional Advice</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The service does not provide professional advice of any kind. The QR codes generated are tools for encoding information and should not be relied upon for critical business, legal, medical, or financial decisions. For professional advice, please consult qualified experts in the relevant field.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">6. Limitation of Liability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by applicable law, FastQRGen shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-3">
                  <li>Your access to or use of or inability to access or use the service</li>
                  <li>Any conduct or content of any third party on the service</li>
                  <li>Any content obtained from the service</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                  <li>QR codes that fail to scan or function as intended</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">7. Service Availability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We do not guarantee that the service will be available at all times. We may experience hardware, software, or other problems, or need to perform maintenance related to the service, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the service at any time without notice.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">8. Indemnification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to defend, indemnify, and hold harmless FastQRGen and its licensors, employees, contractors, agents, officers, and directors from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from your use of and access to the service, or your violation of these terms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">9. Changes to Disclaimer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify this disclaimer at any time. Changes and clarifications will take effect immediately upon their posting on the website. We encourage users to frequently check this page for any changes. Your continued use of the service after any modifications constitutes acceptance of the updated disclaimer.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">10. Contact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this disclaimer, please contact us at{' '}
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
      </div>
    </section>
  );
}
