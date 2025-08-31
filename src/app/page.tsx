import dynamic from 'next/dynamic';
import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Footer from '@/components/landing/footer';
import { Skeleton } from '@/components/ui/skeleton';

const LoadingSkeleton = () => (
  <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
    <div className="flex flex-col items-center space-y-4">
      <Skeleton className="h-12 w-1/2" />
      <Skeleton className="h-6 w-3/4" />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    </div>
  </div>
);

const MomentOfComfort = dynamic(() => import('@/components/landing/moment-of-comfort'), { loading: () => <LoadingSkeleton /> });
const BoxOptions = dynamic(() => import('@/components/landing/box-options'), { loading: () => <LoadingSkeleton /> });
const ShareTheJoy = dynamic(() => import('@/components/landing/share-the-joy'), { loading: () => <LoadingSkeleton /> });
const TrustBuilders = dynamic(() => import('@/components/landing/trust-builders'), { loading: () => <LoadingSkeleton /> });
const YourDailyWin = dynamic(() => import('@/components/landing/your-daily-win'), { loading: () => <LoadingSkeleton /> });
const HowItWorks = dynamic(() => import('@/components/landing/how-it-works'), { loading: () => <LoadingSkeleton /> });
const SocialProof = dynamic(() => import('@/components/landing/social-proof'), { loading: () => <LoadingSkeleton /> });
const TheSiomaiStory = dynamic(() => import('@/components/landing/the-siomai-story'), { loading: () => <LoadingSkeleton /> });
const BeyondTheBox = dynamic(() => import('@/components/landing/beyond-the-box'), { loading: () => <LoadingSkeleton /> });
const Promo = dynamic(() => import('@/components/landing/promo'), { loading: () => <LoadingSkeleton /> });
const LateNightCravings = dynamic(() => import('@/components/landing/late-night-cravings'), { loading: () => <LoadingSkeleton /> });
const OurPromise = dynamic(() => import('@/components/landing/our-promise'), { loading: () => <LoadingSkeleton /> });
const Faq = dynamic(() => import('@/components/landing/faq'), { loading: () => <LoadingSkeleton /> });
const JoinTheCommunity = dynamic(() => import('@/components/landing/join-the-community'), { loading: () => <LoadingSkeleton /> });


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
      </main>
      <Footer />
    </div>
  );
}
