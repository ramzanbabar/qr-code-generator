'use client';

import { Shield, Lock, Eye, Database, Globe, Bell } from 'lucide-react';

export default function PrivacySection() {
  return (
    <section id="privacy" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy is our priority. Learn how we handle and protect your information
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Privacy Commitment</h3>
                <p className="text-muted-foreground">
                  At FastQRGen, we take your privacy seriously. Our QR code generator is designed with privacy as a core principle. All QR codes are generated entirely in your browser, meaning your data never leaves your device.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                1. Information We Collect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Unlike many online services, FastQRGen does not collect or store the content you encode in QR codes. Here's what we do and don't collect:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 p-4 rounded-lg">
                  <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">✓ We DO NOT Collect:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• QR code content or data</li>
                    <li>• Personal information you encode</li>
                    <li>• WiFi passwords</li>
                    <li>• Contact details</li>
                    <li>• URLs or messages</li>
                  </ul>
                </div>
                <div className="bg-blue-500/10 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">ℹ We MAY Collect:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Anonymous usage statistics</li>
                    <li>• Browser type and version</li>
                    <li>• General location (country)</li>
                    <li>• Pages visited</li>
                    <li>• Referral sources</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                2. How We Use Information
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Any anonymous analytics data we collect is used solely to improve our service, understand user needs, and optimize the user experience. We use this information to identify popular features, fix bugs, and make informed decisions about future improvements. We never sell, rent, or share your data with third parties for marketing purposes.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                3. Third-Party Services
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We may use third-party services for analytics (such as Google Analytics) that collect anonymous usage data. These services have their own privacy policies and we encourage you to review them. These services may collect information about your visit to our website, including your IP address, browser type, and pages viewed, but this information is not linked to any personally identifiable information.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                4. Cookies and Tracking
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We use essential cookies to ensure the proper functioning of our website, such as remembering your theme preference (light or dark mode). We may also use analytics cookies to understand how visitors interact with our website. You can control cookie settings through your browser preferences. Disabling cookies may affect some functionality of the Service.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                5. Data Security
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Since all QR code generation happens client-side in your browser, your sensitive data never travels across the internet or reaches our servers. This provides the highest level of privacy protection for information like WiFi passwords, personal contact details, and private messages. We implement industry-standard security measures to protect our website from unauthorized access and attacks.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                6. Your Rights
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Under various privacy regulations (including GDPR and CCPA), you have certain rights regarding your data:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Right to access any personal data we hold about you</li>
                <li>Right to request deletion of your data</li>
                <li>Right to opt-out of analytics tracking</li>
                <li>Right to data portability</li>
                <li>Right to correct inaccurate data</li>
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border">
              <h3 className="text-lg font-semibold mb-3">7. Children's Privacy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our Service is not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will take steps to delete such information.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border">
              <h3 className="text-lg font-semibold mb-3">8. Changes to This Policy</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes. Continued use of the Service after any modifications constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border">
              <h3 className="text-lg font-semibold mb-3">9. Contact Us</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
                <a href="mailto:privacy@fastqrcodegen.online" className="text-primary hover:underline">
                  privacy@fastqrcodegen.online
                </a>
              </p>
            </div>

            <div className="text-sm text-muted-foreground text-center border-t pt-6 mt-6">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
