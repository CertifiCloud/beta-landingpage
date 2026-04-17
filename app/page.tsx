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
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem]"
        style={{
          background:
            "radial-gradient(circle at top, var(--color-primary-soft), transparent 58%)",
        }}
      />
      <div className="pointer-events-none absolute left-[-6rem] top-40 -z-10 h-72 w-72 rounded-full bg-[var(--color-bg-tint)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-20 -z-10 h-80 w-80 rounded-full bg-[var(--color-bg-tint-strong)] blur-3xl" />

      <Navbar />
      <Hero />
      <BusinessModel />
      <Solution />
      <Certifications />
      <FinalCta />
      <Pricing />
      <Market />
      <Footer />
    </main>
  );
}
