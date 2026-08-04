import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Consultation | Out in Asia",
  description:
    "One-on-one travel consultation with Filippo or Szilárd to design your perfect Southeast Asia journey.",
};

export default function ConsultationPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="overflow-x-hidden">

          <PageHero
            image="/private-trips/hero.png"
            eyebrow="SERVICES"
            title="Travel"
            titleLine2="Consultation"
            subtitle="A one-on-one session to shape your perfect journey"
          />

          <section className="py-24 md:py-32 bg-warm-cream">
            <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-ocean-teal mb-4">
                Coming Soon
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                This page is being <span className="italic text-sunset-orange">crafted</span>
              </h2>
              <p className="font-sans text-base leading-relaxed text-navy/70">
                We&apos;re putting together the details for our travel consultation service. In the
                meantime, reach out and we&apos;ll be happy to tell you more.
              </p>
            </div>
          </section>

        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
