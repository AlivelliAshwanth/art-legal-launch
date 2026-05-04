import { LegalPage } from './LegalPage';

const RefundPolicy = () => (
  <LegalPage
    eyebrow="Legal"
    title="Refund & Cancellation Policy"
    lead="Our policy on refunds, rescheduling and cancellations."
    sections={[
      { heading: '1. Consultation Fees', body: <p>Consultation fees are payable in advance to confirm a slot. Once a consultation has been conducted, the fee is non-refundable. Slots may be rescheduled at no charge if the request is received at least 24 hours before the scheduled time.</p> },
      { heading: '2. Cancellation by the Client', body: <p>Cancellation requests received more than 24 hours before the scheduled slot are eligible for a full refund less payment-gateway charges (typically 2–3%). Cancellations within 24 hours are not eligible for refund but may be rescheduled once at no additional cost.</p> },
      { heading: '3. Document Drafting Fees', body: <p>Fees for document drafting (e.g., agreements, deeds, applications) are refundable in full if work has not commenced. Once drafting work has begun, refund is restricted to the unutilised portion of the fee, at the Firm's reasonable discretion.</p> },
      { heading: '4. Cancellation by the Firm', body: <p>If the Firm is unable to honour a confirmed slot owing to unforeseen circumstances, the client will be offered a rescheduled slot at the earliest convenience or a full refund.</p> },
      { heading: '5. Refund Processing', body: <p>Approved refunds are processed within 7–10 working days through the original payment method via the payment gateway.</p> },
      { heading: '6. Disputes', body: <p>Any dispute regarding a refund must be raised in writing within 14 days of the relevant transaction. Decisions of the Firm in such matters are final.</p> },
      { heading: '7. How to Request', body: <p>To request a refund or reschedule, write to us with your booking reference. Contact details are at the bottom of this page.</p> },
    ]}
  />
);

export default RefundPolicy;
