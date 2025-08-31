import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import MomentOfComfort from '@/components/landing/moment-of-comfort';
import BoxOptions from '@/components/landing/box-options';
import ShareTheJoy from '@/components/landing/share-the-joy';
import TrustBuilders from '@/components/landing/trust-builders';
import YourDailyWin from '@/components/landing/your-daily-win';
import HowItWorks from '@/components/landing/how-it-works';
import SocialProof from '@/components/landing/social-proof';
import TheSiomaiStory from '@/components/landing/the-siomai-story';
import BeyondTheBox from '@/components/landing/beyond-the-box';
import Promo from '@/components/landing/promo';
import LateNightCravings from '@/components/landing/late-night-cravings';
import OurPromise from '@/components/landing/our-promise';
import Faq from '@/components/landing/faq';
import JoinTheCommunity from '@/components/landing/join-the-community';
import FloatingCta from '@/components/landing/floating-cta';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <MomentOfComfort />
        <BoxOptions />
        <ShareTheJoy />
        <TrustBuilders />
        <YourDailyWin />
        <HowItWorks />
        <SocialProof />
        <TheSiomaiStory />
        <BeyondTheBox />
        <Promo />
        <LateNightCravings />
        <OurPromise />
        <Faq />
        <JoinTheCommunity />
        <FloatingCta />
      </main>
      <Footer />
    </div>
  );
}
