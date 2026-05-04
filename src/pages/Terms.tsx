import { LegalPage } from './LegalPage';

const Terms = () => (
  <LegalPage
    eyebrow="Legal"
    title="Terms & Conditions"
    lead="The terms governing use of this website and engagement with ART Legal & Co."
    sections={[
      { heading: '1. Acceptance', body: <p>By accessing this website, you accept these Terms & Conditions and the Disclaimer presented at first visit. If you do not agree, please discontinue use of the site.</p> },
      { heading: '2. Nature of the Website', body: <p>This website is informational. Nothing on this website constitutes legal advice. No advocate–client relationship is formed by browsing the site, by sending an enquiry through it, or by booking a consultation alone.</p> },
      { heading: '3. Bar Council of India Compliance', body: <p>In accordance with the rules of the Bar Council of India, the Firm does not solicit work or advertise. Information on this site is made available only at the user's request, for informational purposes.</p> },
      { heading: '4. Engagement', body: <p>Formal engagement of the Firm requires a written or recorded engagement specifying scope of work and fees. Until such engagement is in place, the Firm assumes no professional responsibility for any matter.</p> },
      { heading: '5. Fees & Payments', body: <p>Indicative fees published on the site are estimates. Final fees are agreed at the consultation. Payments are processed through Razorpay; the Firm does not store card or bank details. All fees are quoted in Indian Rupees (INR) and are subject to applicable taxes.</p> },
      { heading: '6. Acceptable Use', body: <p>You agree not to use the website for any unlawful purpose, to upload malicious content, to scrape or republish content, or to misuse forms (including submission of false information).</p> },
      { heading: '7. Intellectual Property', body: <p>All text, graphics, logos and the firm name "ART Legal & Co." are the property of the Firm and protected by applicable laws. No content may be reproduced without written permission.</p> },
      { heading: '8. Limitation of Liability', body: <p>The Firm shall not be liable for any direct or indirect loss arising from use of the website or reliance on information published on it. Use of the site is at the user's own risk.</p> },
      { heading: '9. Governing Law & Jurisdiction', body: <p>These terms are governed by the laws of India. Any dispute is subject to the exclusive jurisdiction of the courts at Motihari, Bihar.</p> },
      { heading: '10. Changes', body: <p>The Firm may update these terms at any time. Continued use of the site after publication constitutes acceptance of the updated terms.</p> },
    ]}
  />
);

export default Terms;
