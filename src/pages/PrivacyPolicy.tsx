import { LegalPage } from './LegalPage';

const PrivacyPolicy = () => (
  <LegalPage
    eyebrow="Legal"
    title="Privacy Policy"
    lead="How ART Legal & Co. collects, uses and protects your information."
    sections={[
      { heading: '1. Introduction', body: <p>ART Legal & Co. ("the Firm", "we", "us") respects the privacy of every visitor and client. This policy explains the limited information we collect through this website and how it is used. By using this website, you consent to the practices described here.</p> },
      { heading: '2. Information We Collect', body: <p>We collect information you voluntarily provide through forms — name, email, phone, the matter you wish to discuss, and any documents uploaded. We may also automatically collect basic device and analytics information (browser type, pages visited) to maintain and improve the site.</p> },
      { heading: '3. How We Use Information', body: <p>Information is used solely to (a) respond to your enquiry, (b) schedule and conduct consultations, (c) process payments through our payment gateway, and (d) maintain records required by law and the rules of the Bar Council of India.</p> },
      { heading: '4. Confidentiality', body: <p>All information shared in the course of seeking legal advice is held in strict professional confidence in accordance with advocate-client privilege under Indian law.</p> },
      { heading: '5. Sharing of Information', body: <p>We do not sell or rent personal information. Information is shared only with payment processors (Razorpay) for transaction processing, with hosting and email service providers under appropriate confidentiality terms, or where required by law.</p> },
      { heading: '6. Cookies', body: <p>The site uses minimal cookies for session management and analytics. You may disable cookies in your browser; some features may be limited as a result.</p> },
      { heading: '7. Data Security', body: <p>We use industry-standard technical and organisational measures to protect personal data, including encryption in transit (HTTPS) and access controls. No system, however, is entirely free from risk.</p> },
      { heading: '8. Data Retention', body: <p>Personal information is retained only as long as necessary for the purposes for which it was collected, or as required by law.</p> },
      { heading: '9. Your Rights', body: <p>You may request access to, correction of, or deletion of personal data we hold about you, subject to professional and legal record-keeping obligations. Write to us at the email below.</p> },
      { heading: '10. Changes to this Policy', body: <p>This policy may be updated from time to time. The updated version is effective from the date of publication on this page.</p> },
    ]}
  />
);

export default PrivacyPolicy;
