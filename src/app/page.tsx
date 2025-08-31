import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import BoxOptions from '@/components/landing/box-options';
import TrustBuilders from '@/components/landing/trust-builders';
import SocialProof from '@/components/landing/social-proof';
import Promo from '@/components/landing/promo';
import FloatingCta from '@/components/landing/floating-cta';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <BoxOptions />
        <TrustBuilders />
        <SocialProof />
        <Promo />
        <FloatingCta />
      </main>
      <Footer />
    </div>
  );
}
