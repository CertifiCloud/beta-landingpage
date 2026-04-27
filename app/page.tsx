import { BusinessModel } from "@/components/business-model";
import { Certifications } from "@/components/certifications";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Market } from "@/components/market";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { Solution } from "@/components/solution";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--color-bg-body)]">
      <div className="pointer-events-none absolute inset-0 -z-20 grid-overlay opacity-45 md:opacity-55" />
      <div className="pointer-events-none absolute left-[-7rem] top-20 -z-10 hidden h-[22rem] w-[22rem] hero-orb bg-[radial-gradient(circle,var(--color-blue-300),transparent_65%)] md:block" />
      <div className="pointer-events-none absolute right-[-9rem] top-[-5rem] -z-10 hidden h-[24rem] w-[24rem] hero-orb bg-[radial-gradient(circle,var(--color-blue-700),transparent_66%)] opacity-45 md:block" />
      <div className="pointer-events-none absolute bottom-[-11rem] left-1/2 -z-10 hidden h-[26rem] w-[34rem] -translate-x-1/2 hero-orb bg-[radial-gradient(circle,var(--color-primary-soft),transparent_72%)] md:block" />

      <Navbar />
      <Hero />
      <BusinessModel />
      <Solution />
      <Certifications />
      <Market />
      <Pricing />
      <FinalCta />
      <Footer />
    </main>
  );
}
