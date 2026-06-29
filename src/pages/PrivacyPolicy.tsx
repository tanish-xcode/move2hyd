import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-40 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Move2Hyderabad. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We may collect the following types of information:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, and contact details when you sign up for newsletters or contact us.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and navigation patterns.</li>
                <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
                <li><strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the collected information for:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Providing and improving our services and content</li>
                <li>Personalizing your experience on our website</li>
                <li>Sending newsletters and updates (with your consent)</li>
                <li>Analyzing website traffic and user behavior</li>
                <li>Responding to your inquiries and support requests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share data with 
                trusted service providers who assist us in operating our website, conducting our business, or serving 
                our users, provided they agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal data 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies to enhance your browsing experience. You can choose to disable cookies 
                through your browser settings, but this may affect certain features of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to external websites. We are not responsible for the privacy practices 
                or content of these third-party sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. Any changes will be posted on this page with 
                an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@move2hyderabad.com
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}