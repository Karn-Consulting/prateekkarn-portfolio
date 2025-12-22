import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen py-16 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>

        <div className="space-y-8">
          <div>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: December 22, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                1. Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Karn Corporation (trading as Prateek Karn Consulting, GSTIN: 03CLWPK4491C1ZX) ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and job title when you contact us or request our services.</li>
                <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, pages visited, and time spent on pages.</li>
                <li><strong>Marketing Data:</strong> Preferences for receiving marketing communications and your communication preferences.</li>
                <li><strong>Business Information:</strong> Information relevant to providing consulting services, including your business goals, marketing challenges, and technical infrastructure.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To provide, operate, and maintain our consulting services</li>
                <li>To communicate with you regarding your inquiries and service requests</li>
                <li>To send you technical notices, updates, and support messages</li>
                <li>To respond to your comments, questions, and customer service requests</li>
                <li>To analyze usage trends and improve our website and services</li>
                <li>To detect, prevent, and address technical issues or fraudulent activities</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our website and providing our services (e.g., hosting, analytics, email services).</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety.</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition.</li>
                <li><strong>With Your Consent:</strong> When you have given explicit consent to share your information.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                5. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                6. Data Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                7. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict the processing of your information</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Request data portability</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                To exercise these rights, please contact us at prateek.karn@prateekkarn.com.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                8. Cookies and Tracking Technologies
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some parts of our website may not function properly without cookies.
              </p>
              
              {/* RB2B Disclosure */}
              <div className="bg-secondary/50 border border-border rounded-lg p-4 mt-4">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Third-Party Data Partners & Visitor Identification
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  When you visit or log in to our website, cookies and similar technologies may be used by our online data partners or vendors to associate these activities with other personal information they or others have about you, including by association with your email. We (or service providers on our behalf) may then send communications and marketing to these email addresses.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  <strong>Opt-Out:</strong> You may opt out of receiving this advertising by visiting:{" "}
                  <a 
                    href="https://app.retention.com/optout" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    https://app.retention.com/optout
                  </a>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>GDPR Opt-Out:</strong> You also have the option to opt out of the collection of your personal data in compliance with GDPR. To exercise this option, please visit:{" "}
                  <a 
                    href="https://www.rb2b.com/rb2b-gdpr-opt-out" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    https://www.rb2b.com/rb2b-gdpr-opt-out
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                9. Third-Party Links
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                10. Children's Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                11. International Data Transfers
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and maintained on servers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our services, you consent to such transfers.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                12. Changes to This Privacy Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                13. Contact Information
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="pl-4">
                  <p><strong>Karn Corporation</strong></p>
                  <p>Proprietor: Prateek Kumar Karan</p>
                  <p>GSTIN: 03CLWPK4491C1ZX</p>
                  <p>Email: prateek.karn@prateekkarn.com</p>
                  <p>Address: Kala Ghanupur Sub Urban, House No 8, New Pal Avenue, Ram Tirath Road, Amritsar, Punjab, 143001, India</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
