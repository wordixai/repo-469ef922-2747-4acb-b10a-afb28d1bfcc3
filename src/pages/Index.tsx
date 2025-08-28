import AnnouncementBanner from '@/components/sections/AnnouncementBanner';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import MainFeatures from '@/components/sections/MainFeatures';
import CorePrinciples from '@/components/sections/CorePrinciples';
import Features from '@/components/sections/Features';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import UseCases from '@/components/sections/UseCases';
import FAQ from '@/components/sections/FAQ';
import CallToAction from '@/components/sections/CallToAction';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--background-base))] text-[hsl(var(--accent-black))] overflow-x-clip">
      <main className="overflow-x-clip">
        <AnnouncementBanner />
        <Header />
        <Hero />
        <TrustedBy />
        <MainFeatures />
        <CorePrinciples />
        <Features />
        <Pricing />
        <Testimonials />
        <UseCases />
        <FAQ />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
};

export default Index;