import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { DisclaimerModal } from './DisclaimerModal';
import { MobileCallBar } from './MobileCallBar';

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-paper">
    <Navbar />
    <main className="flex-1 pb-16 md:pb-0">{children}</main>
    <Footer />
    <MobileCallBar />
    <DisclaimerModal />
  </div>
);
