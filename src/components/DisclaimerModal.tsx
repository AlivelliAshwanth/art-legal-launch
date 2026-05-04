import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { GoldDivider } from './GoldDivider';

const KEY = 'art-legal-disclaimer-accepted';

export const DisclaimerModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem(KEY)) setOpen(true);
  }, []);

  const accept = () => {
    localStorage.setItem(KEY, '1');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={() => { /* no close without accept */ }}>
      <DialogContent
        className="max-w-2xl bg-paper border-gold/40 [&>button]:hidden"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="font-display text-center text-xl uppercase tracking-[0.18em] text-ink">
            Disclaimer
          </DialogTitle>
        </DialogHeader>
        <GoldDivider />
        <div className="text-sm leading-relaxed text-foreground/80 font-serif text-[15px] max-h-[55vh] overflow-y-auto pr-2">
          <p className="mb-4">
            As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. By clicking <span className="font-semibold">"I Agree"</span>, the user acknowledges that he/she of his/her own accord wishes to know more about <span className="font-semibold">ART Legal & Co.</span> for his/her own information and use; there has been no form of solicitation, advertisement or inducement by ART Legal & Co. or its members.
          </p>
          <p>
            The information provided on this website is solely available at the user's request for informational purposes only and should not be interpreted as soliciting or advertisement. ART Legal & Co. is not liable for any consequence of any action taken by the user relying on material/information provided on this website.
          </p>
        </div>
        <DialogFooter className="!justify-center pt-2">
          <button onClick={accept} className="btn-gold">I Agree</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
