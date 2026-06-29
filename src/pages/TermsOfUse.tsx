import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-40 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Use</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Move2Hyderabad website, you accept and agree to be bound by these Terms of Use. 
                If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Use of Website</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You agree to use this website only for lawful purposes and in a way that does not:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Infringe upon the rights of others</li>
                <li>Restrict or inhibit anyone else's use of the website</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit any harmful, offensive, or illegal content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property 
                of Move2Hyderabad or its content suppliers and is protected by copyright and intellectual property laws. 
                You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Information Accuracy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to provide accurate and up-to-date information about Hyderabad, including costs, services, 
                and amenities. However, we make no warranties or representations about the accuracy, completeness, 
                or reliability of any information on this website. Information may change without notice, and you 
                should verify details independently before making decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website contains links to third-party websites for your convenience. These links do not signify 
                our endorsement of such websites. We have no control over and assume no responsibility for the content, 
                privacy policies, or practices of any third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. User Contributions</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you submit any content to our website (comments, reviews, etc.), you grant us a non-exclusive, 
                royalty-free, perpetual license to use, modify, and distribute that content. You are responsible 
                for ensuring your contributions do not violate any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website is provided "as is" without any warranties, express or implied. We do not warrant that 
                the website will be uninterrupted, error-free, or free of viruses or other harmful components. 
                Your use of the website is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, Move2Hyderabad shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages arising from your use of or inability 
                to use this website or any information provided herein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless Move2Hyderabad, its officers, directors, employees, 
                and agents from any claims, damages, losses, or expenses arising from your violation of these 
                Terms of Use or your use of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Use shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the 
                courts in Hyderabad, Telangana.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately 
                upon posting to the website. Your continued use of the website after any changes constitutes your 
                acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Use, please contact us at legal@move2hyderabad.com
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}