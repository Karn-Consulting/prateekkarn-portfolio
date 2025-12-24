import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Terms and Conditions
              </h1>
              <p className="text-muted-foreground">
                Last updated: October 15, 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  1. Agreement to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the services provided by Karn Corporation (trading as Prateek Karn Consulting, GSTIN: 03CLWPK4491C1ZX), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  2. Services Description
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Karn Corporation provides AI Business Architecture, MarTech consulting, intelligent automation solutions, and related digital marketing services. Our services include but are not limited to strategy development, system architecture design, implementation support, and advisory services for marketing technology infrastructure.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  3. Professional Services Agreement
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  All consulting engagements are subject to a separate written agreement that will include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Scope of work and deliverables</li>
                  <li>Timeline and milestones</li>
                  <li>Fees and payment terms</li>
                  <li>Confidentiality provisions</li>
                  <li>Intellectual property rights</li>
                  <li>Termination clauses</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  4. Client Responsibilities
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  As a client, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information necessary for service delivery</li>
                  <li>Respond to requests for information in a timely manner</li>
                  <li>Provide access to necessary systems, tools, and data as agreed</li>
                  <li>Maintain confidentiality of any proprietary methodologies or tools shared</li>
                  <li>Make timely payments according to the agreed payment terms</li>
                  <li>Designate appropriate personnel for communication and decision-making</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  5. Payment Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Unless otherwise specified in a separate agreement:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Payment terms will be specified in the engagement agreement</li>
                  <li>Invoices are due within 15 days of receipt unless otherwise agreed</li>
                  <li>Late payments may incur interest charges at the rate of 1.5% per month</li>
                  <li>All fees are exclusive of applicable taxes (GST, etc.)</li>
                  <li>Expenses will be billed separately with appropriate documentation</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  6. Intellectual Property Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  <strong>Our Pre-existing IP:</strong> All methodologies, frameworks, tools, templates, and processes developed by Karn Corporation prior to or independently of the engagement remain our exclusive property.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  <strong>Client-Specific Deliverables:</strong> Upon full payment, you will own the specific deliverables created exclusively for your project, subject to our retained rights to use general methodologies and approaches.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Third-Party IP:</strong> Any third-party software, tools, or services integrated into our solutions remain the property of their respective owners and are subject to their licensing terms.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  7. Confidentiality
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. This includes business strategies, technical architectures, data, methodologies, and any information marked as confidential. This obligation survives the termination of the engagement for a period of three (3) years.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  8. Warranties and Disclaimers
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  <strong>Our Warranties:</strong> We warrant that our services will be performed in a professional manner consistent with industry standards.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  <strong>Disclaimer:</strong> Except as expressly stated, our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee specific business outcomes, ROI improvements, or performance metrics unless explicitly agreed in writing. Results depend on many factors including client implementation, market conditions, and third-party systems.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  9. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Our total liability for any claims arising from our services shall not exceed the fees paid by you for the specific services giving rise to the claim</li>
                  <li>We shall not be liable for indirect, incidental, special, consequential, or punitive damages</li>
                  <li>We shall not be liable for loss of profits, revenue, data, or business opportunities</li>
                  <li>These limitations apply regardless of the legal theory (contract, tort, negligence, strict liability, or otherwise)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  10. Indemnification
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless Karn Corporation from any claims, damages, or expenses arising from: (a) your use of our services, (b) your violation of these terms, (c) your violation of any rights of third parties, or (d) any content or data you provide to us.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  11. Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Either party may terminate an engagement:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>For convenience with 30 days written notice</li>
                  <li>Immediately for material breach if not cured within 15 days of written notice</li>
                  <li>Immediately if the other party becomes insolvent or files for bankruptcy</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Upon termination, you shall pay for all services rendered through the termination date. Confidentiality obligations and intellectual property provisions survive termination.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  12. Data Protection and Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We will handle your data in accordance with our Privacy Policy and applicable data protection laws. When processing personal data on your behalf, we act as a data processor and will follow your lawful instructions regarding data handling.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  13. Force Majeure
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Neither party shall be liable for failure to perform obligations due to circumstances beyond reasonable control, including natural disasters, war, terrorism, labor disputes, government actions, internet failures, or third-party service disruptions.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  14. Dispute Resolution
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  In the event of any dispute:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>The parties will first attempt to resolve through good faith negotiations</li>
                  <li>If unresolved within 30 days, disputes will be subject to mediation</li>
                  <li>If mediation fails, disputes shall be resolved through arbitration under Indian arbitration laws</li>
                  <li>The seat of arbitration shall be Amritsar, Punjab, India</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  15. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of India. The courts of Amritsar, Punjab, India shall have exclusive jurisdiction over any disputes.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  16. Independent Contractor
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Karn Corporation is an independent contractor. Nothing in these terms creates an employment, partnership, joint venture, or agency relationship between the parties.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  17. Entire Agreement
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions, together with any engagement agreement and Privacy Policy, constitute the entire agreement between the parties and supersede all prior agreements, understandings, or representations.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  18. Amendments
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  19. Severability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  20. Contact Information
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>For questions regarding these Terms and Conditions, please contact:</p>
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

            {/* Back to Home */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8b7355] text-white hover:bg-[#7a6548] rounded-md transition-all duration-200 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <ContactSection />
    </div>
  );
};

export default TermsAndConditions;
